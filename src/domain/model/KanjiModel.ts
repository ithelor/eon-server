import { Schema, model } from 'mongoose';
import { KANJI_COLLECTION } from 'constant/env';
import Kanji from 'domain/entity/Kanji';

const KanjiSchema = new Schema<Kanji>(
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
        collection: KANJI_COLLECTION,
    },
);

export default model<Kanji>('Kanji', KanjiSchema);
