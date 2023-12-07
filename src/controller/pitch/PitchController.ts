import { Request, Response } from 'express';
import handleControllerError from 'decorator/handleControllerError';
import parsePaginationQuery from 'helper/query/parsePaginationQuery';
import PitchService from 'services/PitchService';

export default class PitchController {
    @handleControllerError
    static async getPitches(req: Request, res: Response) {
        const paginationFilter = parsePaginationQuery(req);
        const pitch = await PitchService.getPitches(paginationFilter);

        res.json(pitch);
    }

    @handleControllerError
    static async getPitch(req: Request, res: Response) {
        const result = await PitchService.getPitch(req.params.expression);

        res.json(result);
    }
}
