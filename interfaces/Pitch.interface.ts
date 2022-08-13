import mongoose from 'mongoose'

export default interface IPitch extends mongoose.Document {
  expression: string
  reading: string
  accent: string
}
