import { Router } from 'express';
import kanjiRouter from './kanji.router';
import pitchRouter from './pitch.router';
import userRouter from './user.router';

const apiRouter = Router();

apiRouter.use('/kanji', kanjiRouter);
apiRouter.use('/pitch', pitchRouter);
apiRouter.use('/user', userRouter);

export default apiRouter;
