import { Schema, model } from 'mongoose';
import { PITCH_COLLECTION } from 'constant/env';
import Pitch from 'domain/entity/Pitch';

const PitchSchema = new Schema<Pitch>(
    {
        accent: String,
        expression: String,
        reading: String,
    },
    {
        collection: PITCH_COLLECTION,
    },
);

export default model<Pitch>('Pitch', PitchSchema);
