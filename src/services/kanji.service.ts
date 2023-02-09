import { Kanji } from 'models';
import type { IKanji } from 'interfaces';

export const getKanji = async (query: {}): Promise<IKanji[]> => {
    try {
        const kanji = await Kanji.find(query).select('-_id').orFail();

        return kanji;
    } catch (error) {
        console.log(error);

        throw Error('Error while fetching kanji');
    }
};
