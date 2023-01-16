import { Router } from 'express'
import * as profileCtrl from '../controllers/profile.js'


const router = Router()

// GET /journey/
router.get('/', profileCtrl.index)

export {
  router
}
