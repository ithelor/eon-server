import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import getIsEmail from 'validator/lib/isEmail';
import { JWT_ACCESS_EXPIRATION, JWT_SECRET } from 'constant/env';
import UserEntity from 'domain/entity/user/User';
import RoleEnum from 'domain/entity/user/RoleEnum';
import User from 'domain/model/UserModel';
import RefreshToken from 'domain/model/RefreshTokenModel';
import handleControllerError from 'decorator/handleControllerError';
import UserService from 'services/UserService';

export default class UserController {
    @handleControllerError
    static async getUser(req: Request, res: Response) {
        const { user } = req.body;
        const result = await UserService.getUser(user._id);

        res.json(result);
    }

    @handleControllerError
    static async register(req: Request<never, never, UserEntity>, res: Response) {
        const { email, password } = req.body;
        const isEmail = getIsEmail(email);

        if (!isEmail) {
            res.status(400).json({ error: 'Email is invalid' });

            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword, roles: RoleEnum.User });

        res.json(user);
    }

    @handleControllerError
    static async login(req: Request<never, never, UserEntity>, res: Response) {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({ error: "User doesn't exist" });

            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ error: "Password doesn't match" });

            return;
        }

        const accessToken = jwt.sign({ user }, JWT_SECRET, { expiresIn: JWT_ACCESS_EXPIRATION });
        const refreshToken = await UserService.createRefreshToken(user);

        res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' })
            .header('Authorization', accessToken)
            .send(user);
    }

    @handleControllerError
    static async refresh(req: Request, res: Response) {
        const { refreshToken: requestToken } = req.cookies;

        if (!requestToken) {
            res.status(401).json({ error: 'No refresh token provided' });

            return;
        }

        const refreshToken = await RefreshToken.findOne({ token: requestToken });
        if (!refreshToken) {
            res.status(403).json({ error: 'Refresh token not found' });

            return;
        }

        const isRefreshTokenExpired = await UserService.handleExpiration(refreshToken);
        if (isRefreshTokenExpired) {
            res.status(403).json({ error: 'Refresh token has expired' });

            return;
        }

        const { user } = jwt.verify(refreshToken.token, JWT_SECRET) as JwtPayload;
        const accessToken = jwt.sign({ user }, JWT_SECRET, { expiresIn: JWT_ACCESS_EXPIRATION });

        res.header('Authorization', accessToken).json({ user });
    }
}
