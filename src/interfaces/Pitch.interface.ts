import { Document } from 'mongoose';

export default interface IPitch extends Document {
    expression: string;
    reading: string;
    accent: string;
}
