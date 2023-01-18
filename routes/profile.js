import { Router } from 'express'
import * as profileCtrl from '../controllers/profile.js'
import { isLoggedIn } from '../middleware/middleware.js'
// import { v4 as uuidv4 } from 'uuid'


const router = Router()

// GET /profile/
router.get('/:id', isLoggedIn, profileCtrl.showProfile)

// GET /profile/:id/edit
router.get('/', isLoggedIn, profileCtrl.index)

// POST /profile/:id/journeys
router.post('/:id/journeys', isLoggedIn, profileCtrl.createJourney)

// PUT /profile/:id
// router.put('/:id', profileCtrl.update)

export {
  router
}
