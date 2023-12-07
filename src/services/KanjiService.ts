import Kanji from 'domain/entity/Kanji';
import PaginationFilter from 'domain/entity/PaginationFilter';
import KanjiModel from 'domain/model/Kanji';
import handleServiceError from 'decorator/handleServiceError';
import AbstractService from './AbstractService';

export default class KanjiService implements AbstractService {
    @handleServiceError
    static async getKanji(filter: PaginationFilter): Promise<Kanji[]> {
        const { pageSize, pageNumber } = filter;
        const result = await KanjiModel.find()
            .select('-_id')
            .skip((pageNumber - 1) * pageSize)
            .limit(pageSize)
            .orFail()
            .exec();

        return result;
    }

    @handleServiceError
    static async getSingleKanji(kanji: string): Promise<Kanji> {
        const result = await KanjiModel.findOne({ kanji }).select('-_id').orFail().exec();

        return result;
    }
}
