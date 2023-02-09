import { Schema, model } from 'mongoose';
import type { IPitch } from 'interfaces';

const PitchSchema = new Schema<IPitch>(
    {
        accent: String,
        expression: String,
        reading: String,
    },
    {
        collection: 'pitch-accents',
    },
);

export default model<IPitch>('Pitch', PitchSchema);
