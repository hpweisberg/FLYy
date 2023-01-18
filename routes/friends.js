import { Router } from 'express'
import * as friendsCtrl from '../controllers/friends.js'


const router = Router()

router.get('/', friendsCtrl.index)

router.get('/new', friendsCtrl.new)

// GET /friends/:id
router.get('/:id', friendsCtrl.show)

// PATCH /friends/:id
router.patch('/updateFriendList', friendsCtrl.update)



export {
  router
}
