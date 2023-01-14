import { Router } from 'express'
import * as myFlightsCtrl from '../controllers/myFlights.js'

const router = Router()

// GET /myFlights/
router.get('/', myFlightsCtrl.index)

// GET /myFlights/
router.get('/new', myFlightsCtrl.new)

// POST /myFlights/
router.post('/', myFlightsCtrl.create)

export {
  router
}