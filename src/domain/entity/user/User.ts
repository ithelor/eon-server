import { Document } from 'mongoose';
import RoleEnum from './RoleEnum';

export default interface User extends Document {
    email: string;
    password: string;
    roles: RoleEnum[];
}
