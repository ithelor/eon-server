import { Request, Response } from 'express';
import { KanjiService } from 'services';

export const getKanji = async (req: Request, res: Response) => {
    try {
        const kanji = await KanjiService.getKanji({});

        res.json(kanji);
    } catch (error) {
        res.status(400).send();
    }
};
