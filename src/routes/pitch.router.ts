import { Router } from 'express';
import PitchController from 'controller/pitch/PitchController';

const pitchRouter = Router();

pitchRouter.get('/', PitchController.getPitches);

export default pitchRouter;
