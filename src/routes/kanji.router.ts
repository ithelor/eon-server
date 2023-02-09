import { Router } from 'express';
import { KanjiController } from 'controllers';

const kanjiRouter = Router();
kanjiRouter.get('/', KanjiController.getKanji);

export default kanjiRouter;
