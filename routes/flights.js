import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET /flights/
router.get('/', isLoggedIn, flightsCtrl.index)

// GET /flights/
router.get('/new', isLoggedIn, flightsCtrl.new)

// GET /flights/:id
router.get('/:id', isLoggedIn, flightsCtrl.show)

// GET /flights/:id/edit
router.get('/:id/edit', isLoggedIn, flightsCtrl.edit)

// POST /flights/
router.post('/', isLoggedIn, flightsCtrl.create)

// PUT /flights/:id
router.put('/:id', isLoggedIn, flightsCtrl.update)

// DELETE /flights/:id
router.delete('/:id', isLoggedIn, flightsCtrl.delete)

export {
  router
}