import dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

export const PORT = process.env.PORT;
export const CLIENT_URL = process.env.CLIENT_URL;
export const MONGO_URI = process.env.MONGO_URI;
export const KANJI_COLLECTION = process.env.KANJI_COLLECTION;
export const PITCH_COLLECTION = process.env.PITCH_COLLECTION;
