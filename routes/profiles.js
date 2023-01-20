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

// GET profile/:profileId/journeys/:journeyId/edit
router.get('/:profileId/journeys/:journeyId/edit', isLoggedIn, profileCtrl.editJourney)

// GET /profiles/profileId/friends
router.get('/:profileId/friends', isLoggedIn, profileCtrl.friendsIndex)

// GET /profiles/profileId/friends/new
router.get('/:profileId/friends/new', isLoggedIn, profileCtrl.newFriend)

// GET /profile/:profileId/friends/:friendId
router.get('/:profileId/friends/:friendId', isLoggedIn, profileCtrl.showFriends)

// PUT /profile/profileId/journeys/:journeyId
router.put('/:profileId/journeys/:journeyId', isLoggedIn, profileCtrl.updateJourney)

// DELETE /profile/profileId/journeys/:journeyId
router.delete('/:profileId/journeys/:journeyId', isLoggedIn, profileCtrl.deleteJourney)


export {
  router
}
