import { Schema, model } from 'mongoose';
import { REFRESH_TOKEN_COLLECTION } from 'constant/env';
import RefreshToken from 'domain/entity/user/RefreshToken';

const RefreshTokenSchema = new Schema<RefreshToken>(
    {
        user: {
            type: String,
            ref: 'User',
        },
        token: String,
        expiryDate: Date,
    },
    {
        collection: REFRESH_TOKEN_COLLECTION,
    },
);

export default model<RefreshToken>('RefreshToken', RefreshTokenSchema);
