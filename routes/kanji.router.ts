import express from 'express'

import { KanjiController } from 'controllers'

const kanjiRouter = express.Router()

kanjiRouter.get('/', KanjiController.getKanji)

export default kanjiRouter
