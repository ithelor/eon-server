import { Schema, model } from 'mongoose';
import { USER_COLLECTION } from 'constant/env';
import User from 'domain/entity/user/User';
import RoleEnum from 'domain/entity/user/RoleEnum';

const UserSchema = new Schema<User>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        roles: {
            type: [String],
            enum: [RoleEnum.User, RoleEnum.Admin],
            default: [RoleEnum.User],
        },
    },
    {
        collection: USER_COLLECTION,
    },
);

export default model<User>('User', UserSchema);
