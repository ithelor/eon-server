import Pitch from 'domain/entity/Pitch';
import PaginationFilter from 'domain/entity/PaginationFilter';
import PitchModel from 'domain/model/Pitch';
import handleServiceError from 'decorator/handleServiceError';
import AbstractService from './AbstractService';

export default class PitchService implements AbstractService {
    @handleServiceError
    static async getPitch(filter: PaginationFilter): Promise<Pitch[]> {
        const { pageNumber, pageSize } = filter;
        const pitch = await PitchModel.find()
            .select('-_id')
            .skip((pageNumber - 1) * pageSize)
            .limit(pageSize)
            .orFail()
            .exec();

        return pitch;
    }
}
