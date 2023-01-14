import { Router } from 'express'
import * as myFlightsCtrl from '../controllers/myFlights.js'

const router = Router()

router.get('/', myFlightsCtrl.index)

router.get('/new', myFlightsCtrl.new)

export {
  router
}
