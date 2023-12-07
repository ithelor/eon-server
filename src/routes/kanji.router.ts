import { Router } from 'express';
import KanjiController from 'controller/kanji/KanjiController';

const kanjiRouter = Router();

kanjiRouter.get('/', KanjiController.getKanji);
kanjiRouter.get('/:kanji', KanjiController.getSingleKanji);

export default kanjiRouter;
