import { Router } from 'express'
import * as profileCtrl from '../controllers/profile.js'
// import { v4 as uuidv4 } from 'uuid'


const router = Router()

// GET /profile/
router.get('/:id', profileCtrl.index)

// GET /profile/:id/edit
router.get('/', profileCtrl.index)

// PUT /profile/:id
// router.put('/:id', profileCtrl.update)

export {
  router
}
