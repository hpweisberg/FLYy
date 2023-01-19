import { Router } from 'express'
import * as profileCtrl from '../controllers/profile.js'
import { isLoggedIn } from '../middleware/middleware.js'
// import { v4 as uuidv4 } from 'uuid'


const router = Router()

// GET /profile/
router.get('/:id', isLoggedIn, profileCtrl.showProfile)

// GET /profile/:id/edit
router.get('/', isLoggedIn, profileCtrl.index)

// // GET /journey/
// router.get('/:profileId/journeys/:journeyId/new', isLoggedIn, profileCtrl.newJourney)

// POST /profile/:id/journeys
router.post('/:id/journeys', isLoggedIn, profileCtrl.createJourney)

// GET
router.get('/:profileId/journeys/:journeyId/edit', isLoggedIn, profileCtrl.editJourney)

router.get('/:profileId/friends', isLoggedIn, profileCtrl.friendsIndex)

router.get('/:id/friends/new', isLoggedIn, profileCtrl.newFriend)

router.get(':id/friends/:friendId', isLoggedIn, profileCtrl.showFriends)

router.put('/:profileId/journeys/:journeyId', isLoggedIn, profileCtrl.updateJourney)


router.delete('/:profileId/journeys/:journeyId', isLoggedIn, profileCtrl.deleteJourney)

// PUT /profile/:id
// router.put('/:id', profileCtrl.update)



export {
  router
}
