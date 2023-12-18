import jwt from 'jsonwebtoken';
import { JWT_REFRESH_EXPIRATION, JWT_SECRET } from 'constant/env';
import User from 'domain/entity/user/User';
import RefreshTokenEntity from 'domain/entity/user/RefreshToken';
import UserModel from 'domain/model/UserModel';
import RefreshToken from 'domain/model/RefreshTokenModel';
import handleServiceError from 'decorator/handleServiceError';
import AbstractService from './AbstractService';

export default class UserService implements AbstractService {
    @handleServiceError
    static async getUser(_id: string): Promise<User> {
        const user = await UserModel.findOne({ _id }).select('-_id -__v -password').orFail().exec();

        return user;
    }

    @handleServiceError
    static async createRefreshToken(user: User) {
        const now = new Date();
        const expiryDate = now.setSeconds(now.getSeconds() + JWT_REFRESH_EXPIRATION);

        const refreshToken = jwt.sign({ user }, JWT_SECRET, { expiresIn: JWT_REFRESH_EXPIRATION });
        await RefreshToken.create({
            token: refreshToken,
            user,
            expiryDate,
        });

        return refreshToken;
    }

    static async handleExpiration(token: RefreshTokenEntity) {
        const { _id: documentId, expiryDate } = token;
        const hasExpired = expiryDate.getTime() < new Date().getTime();

        if (hasExpired) {
            await RefreshToken.findByIdAndRemove(documentId);
        }

        return hasExpired;
    }
}
