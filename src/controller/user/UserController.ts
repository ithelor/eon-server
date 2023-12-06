import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from 'domain/models/User';
import handleServiceError from 'decorator/handleServiceError';

export default class UserController {
    @handleServiceError
    static async register(req: Request, res: Response) {
        const password = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({ ...req.body, password });

        res.json(user);
    }
}
