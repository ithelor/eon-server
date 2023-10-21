import Kanji from 'domain/entity/Kanji';
import PaginationFilter from 'domain/entity/PaginationFilter';
import KanjiModel from 'domain/models/Kanji';
import handleServiceError from 'decorator/handleServiceError';
import AbstractService from './AbstractService';

export default class KanjiService implements AbstractService {
    @handleServiceError
    static async getKanji(filter: PaginationFilter): Promise<Kanji[]> {
        const { pageSize, pageNumber } = filter;

        const kanji = await KanjiModel.find()
            .select('-_id')
            .skip((pageNumber - 1) * pageSize)
            .limit(pageSize)
            .orFail()
            .exec();

        return kanji;
    }
}
