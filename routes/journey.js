import { Router } from 'express'
import * as journeyCtrl from '../controllers/journey.js'

const router = Router()

router.get('/', journeyCtrl.index)

export {
  router
}
