import { Router } from 'express';
import kanjiRouter from './kanji.router';
import pitchRouter from './pitch.router';

const apiRouter = Router();

apiRouter.use('/kanji', kanjiRouter);
apiRouter.use('/pitch', pitchRouter);

export default apiRouter;
