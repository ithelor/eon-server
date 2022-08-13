import express from 'express'

import { PitchController } from 'controllers'

const pitchRouter = express.Router()

pitchRouter.get('/', PitchController.getPitches)

export default pitchRouter
