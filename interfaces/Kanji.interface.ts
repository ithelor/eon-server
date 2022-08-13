import mongoose from 'mongoose'

export default interface IKanji extends mongoose.Document {
  index: number
  kanji: string
  onyomi: string
  kunyomi: string
  strokes: number
  radical: string
  meaning: string
  level: number
}
