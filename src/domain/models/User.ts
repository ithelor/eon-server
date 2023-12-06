import { Schema, model } from 'mongoose';
import { USER_COLLECTION } from 'constant/env';
import User from 'domain/entity/User';

const UserSchema = new Schema<User>(
    {
        username: String,
        password: String,
    },
    {
        collection: USER_COLLECTION,
    },
);

export default model<User>('User', UserSchema);
