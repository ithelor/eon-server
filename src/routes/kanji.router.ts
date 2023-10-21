import { Router } from 'express';
import KanjiController from 'controller/kanji/KanjiController';

const kanjiRouter = Router();

kanjiRouter.get('/', KanjiController.getKanji);

export default kanjiRouter;
