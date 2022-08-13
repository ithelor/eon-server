import mongoose from 'mongoose'

import IKanji from 'interfaces/Kanji.interface'

const KanjiSchema = new mongoose.Schema<IKanji>(
  {
    index: Number,
    kanji: String,
    onyomi: String,
    kunyomi: String,
    strokes: Number,
    radical: String,
    meaning: String,
    level: Number
  },
  {
    collection: 'kanji-kentei'
  }
)

export default mongoose.model<IKanji>('Kanji', KanjiSchema)
