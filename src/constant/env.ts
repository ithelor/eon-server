import dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

export const PORT = process.env.PORT;
export const CLIENT_URL = process.env.CLIENT_URL;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET ?? '';
export const JWT_ACCESS_EXPIRATION = Number(process.env.JWT_ACCESS_EXPIRATION);
export const JWT_REFRESH_EXPIRATION = Number(process.env.JWT_REFRESH_EXPIRATION);
export const KANJI_COLLECTION = process.env.KANJI_COLLECTION;
export const PITCH_COLLECTION = process.env.PITCH_COLLECTION;
export const REFRESH_TOKEN_COLLECTION = process.env.REFRESH_TOKEN_COLLECTION;
export const USER_COLLECTION = process.env.USER_COLLECTION;
