import User from 'domain/entity/User';
import UserModel from 'domain/models/User';
import handleServiceError from 'decorator/handleServiceError';
import AbstractService from './AbstractService';

export default class UserService implements AbstractService {
    @handleServiceError
    static async getUser(_id: string): Promise<User> {
        const user = await UserModel.findOne({ _id }).select('-_id -__v -password').orFail().exec();

        return user;
    }
}
