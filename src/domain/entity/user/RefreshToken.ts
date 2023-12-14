import { Document } from 'mongoose';

export default interface RefreshToken extends Document {
    user: string;
    token: string;
    expiryDate: Date;
}
