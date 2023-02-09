import { Schema, model } from 'mongoose';
import type IKanji from 'interfaces/Kanji.interface';

const KanjiSchema = new Schema<IKanji>(
    {
        index: Number,
        kanji: String,
        onyomi: String,
        kunyomi: String,
        strokes: Number,
        radical: String,
        meaning: String,
        level: Number,
    },
    {
        collection: 'kanji-kentei',
    },
);

export default model<IKanji>('Kanji', KanjiSchema);
