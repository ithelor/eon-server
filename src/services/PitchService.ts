import Pitch from 'domain/entity/Pitch';
import PaginationFilter from 'domain/entity/PaginationFilter';
import PitchModel from 'domain/model/Pitch';
import handleServiceError from 'decorator/handleServiceError';
import AbstractService from './AbstractService';

export default class PitchService implements AbstractService {
    @handleServiceError
    static async getPitches(filter: PaginationFilter): Promise<Pitch[]> {
        const { pageNumber, pageSize } = filter;
        const result = await PitchModel.find()
            .select('-_id')
            .skip((pageNumber - 1) * pageSize)
            .limit(pageSize)
            .orFail()
            .exec();

        return result;
    }

    @handleServiceError
    static async getPitch(expression: string): Promise<Pitch> {
        const result = await PitchModel.findOne({ expression }).select('-_id').orFail().exec();

        return result;
    }
}
