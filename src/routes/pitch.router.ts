import { Router } from 'express';
import { PitchController } from 'controllers';

const pitchRouter = Router();
pitchRouter.get('/', PitchController.getPitches);

export default pitchRouter;
