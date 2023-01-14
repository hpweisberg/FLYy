import { Router } from 'express'
import * as myFriendsCtrl from '../controllers/myFriends.js'

const router = Router()

router.get('/', myFriendsCtrl.index)

export {
  router
}
