import { Request, Response } from 'express';
import handleControllerError from 'decorator/handleControllerError';
import parsePaginationQuery from 'helper/query/parsePaginationQuery';
import KanjiService from 'services/KanjiService';

export default class KanjiController {
    @handleControllerError
    static async getKanji(req: Request, res: Response) {
        const paginationFilter = parsePaginationQuery(req);
        const result = await KanjiService.getKanji(paginationFilter);

        res.json(result);
    }

    @handleControllerError
    static async getSingleKanji(req: Request, res: Response) {
        const result = await KanjiService.getSingleKanji(req.params.kanji);

        res.json(result);
    }
}
