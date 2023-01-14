import { Router } from 'express'
import * as myJourneyCtrl from '../controllers/myJourney.js'

const router = Router()

router.get('/', myJourneyCtrl.index)

export {
  router
}
