import { Pitch } from 'models';
import type { IPitch } from 'interfaces';

export const getPitch = async (query: {}): Promise<IPitch[]> => {
    try {
        const pitch = await Pitch.find(query).select('-_id').orFail();

        return pitch;
    } catch (error) {
        console.log(error);

        throw Error('Error while fetching pitches');
    }
};
