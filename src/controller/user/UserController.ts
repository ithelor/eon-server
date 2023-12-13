import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import { JWT_SECRET } from 'constant/env';
import UserEntity from 'domain/entity/User';
import User from 'domain/model/User';
import handleControllerError from 'decorator/handleControllerError';
import UserService from 'services/UserService';

export default class UserController {
    @handleControllerError
    static async getUser(req: Request, res: Response) {
        const result = await UserService.getUser(req.body.user.id);

        res.json(result);
    }

    @handleControllerError
    static async register(req: Request<never, never, UserEntity>, res: Response) {
        const { email, password } = req.body;

        if (!isEmail(email)) {
            return res.status(400).json({ error: 'Email is invalid' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await User.create({ email, password: hashedPassword });

        res.json(result);
    }

    @handleControllerError
    static async login(req: Request<never, never, UserEntity>, res: Response) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User doesn't exist" });
        }

        const result = await bcrypt.compare(password, user.password);
        if (!result) {
            return res.status(400).json({ error: "Password doesn't match" });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1 hour' });

        res.json({ token });
    }
}
