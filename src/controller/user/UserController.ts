import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from 'constant/env';
import User from 'domain/models/User';
import handleControllerError from 'decorator/handleControllerError';
import UserService from 'services/UserService';

export default class UserController {
    @handleControllerError
    static async getUser(req: Request, res: Response) {
        const result = await UserService.getUser(req.body.user._id);

        res.json(result);
    }

    @handleControllerError
    static async register(req: Request, res: Response) {
        const password = await bcrypt.hash(req.body.password, 10);
        const result = await User.create({ ...req.body, password });

        res.json(result);
    }

    @handleControllerError
    static async login(req: Request, res: Response) {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json({ error: "User doesn't exist" });
        }

        const result = await bcrypt.compare(req.body.password, user.password);
        if (!result) {
            return res.status(400).json({ error: "Password doesn't match" });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, {
            expiresIn: '1 hour',
        });

        res.json({ token });
    }
}
