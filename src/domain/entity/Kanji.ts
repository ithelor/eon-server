import { Document } from 'mongoose';

export default interface Kanji extends Document {
    index: number;
    kanji: string;
    onyomi: string;
    kunyomi: string;
    strokes: number;
    radical: string;
    meaning: string;
    level: number;
}
