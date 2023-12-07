import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from 'constant/env';
import User from 'domain/model/User';

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        const user = await User.findById((decodedToken as JwtPayload).id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.body.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
