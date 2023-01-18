import { Router } from 'express'
import * as friendsCtrl from '../controllers/friends.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', isLoggedIn, friendsCtrl.index)

router.get('/new', isLoggedIn, friendsCtrl.new)

// GET /friends/:id
router.get('/:id', isLoggedIn, friendsCtrl.show)

// PATCH /friends/:id
router.patch('/updateFriendList', isLoggedIn, friendsCtrl.update)



export {
  router
}
