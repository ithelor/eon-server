import mongoose from 'mongoose'

import { IPitch } from 'interfaces'

const PitchSchema = new mongoose.Schema<IPitch>(
  {
    accent: String,
    expression: String,
    reading: String
  },
  {
    collection: 'pitch-accents'
  }
)

export default mongoose.model<IPitch>('Pitch', PitchSchema)
