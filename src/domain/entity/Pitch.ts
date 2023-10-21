import { Document } from 'mongoose';

export default interface Pitch extends Document {
    expression: string;
    reading: string;
    accent: string;
}
