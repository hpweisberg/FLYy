import { Router } from 'express'
import * as journeyCtrl from '../controllers/journey.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET /journey/
router.get('/', isLoggedIn, journeyCtrl.index)

// GET /journey/
router.get('/new/', isLoggedIn, journeyCtrl.new)

// GET /journey/:id
router.get('/:id', isLoggedIn, journeyCtrl.show)

// GET /journey/:id/edit
router.get('/:id/edit', isLoggedIn, journeyCtrl.edit)

// POST /journey/
router.post('/', isLoggedIn, journeyCtrl.create)

// PUT /journey/:id
router.put('/:id', isLoggedIn, journeyCtrl.update)


export {
  router
}
