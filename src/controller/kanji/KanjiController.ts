import { Request, Response } from 'express';
import handleControllerError from 'decorator/handleControllerError';
import parsePaginationQuery from 'helper/query/parsePaginationQuery';
import KanjiService from 'services/KanjiService';

export default class KanjiController {
    @handleControllerError
    static async getKanji(req: Request, res: Response) {
        const paginationFilter = parsePaginationQuery(req);
        const kanji = await KanjiService.getKanji(paginationFilter);

        res.json(kanji);
    }
}
