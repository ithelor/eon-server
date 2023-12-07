import { Router } from 'express';
import PitchController from 'controller/pitch/PitchController';

const pitchRouter = Router();

pitchRouter.get('/', PitchController.getPitches);
pitchRouter.get('/:expression', PitchController.getPitch);

export default pitchRouter;
