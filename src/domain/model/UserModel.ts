import { Schema, model } from 'mongoose';
import { USER_COLLECTION } from 'constant/env';
import User from 'domain/entity/user/User';

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
    },
    {
        collection: USER_COLLECTION,
    },
);

export default model<User>('User', UserSchema);