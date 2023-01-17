import { Flight } from "../models/flight.js";
import { Profile } from "../models/profile.js";

function index(req, res){
  Flight.find({})
  .then(friends => {
    res.render('friends/index', {
      friends,
      title: "friends"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newFriend(req, res){
  // const newFlight = new Flight()
  // const dt = newFlight.flightDate
  // const departsDate = dt.toISOString().slice(0, 16)
  Profile.findById(req.user.profile)
  .then(profile => {
    console.log(profile)
    res.render('friends/new', {
      title: 'Add Friend',
      profile,
      // flightDate: departsDate,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function updateFriendList(req, res){
  console.log(req.user.profile._id)
  Profile.findById(req.user.profile._id)
  .then(userProfile => {
    Profile.findOne({friendId: req.body.friends})
    .then(friendProfile => {
      // console.log(userProfile, "Hi Beryl")
      // console.log(req.body.friends, "HOWDY HARRISON")
      userProfile.friends.push(friendProfile._id)
      // console.log(userProfile.friends, 'Chow is hungry')
      console.log('Chow is hungry', friendProfile._id)
      userProfile.save()
      .then(() => {
        res.redirect(`/friends`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
}

// Find friend array in the profile
// Add the input of the new friend ID to the Profile Model.
// Save 


export {
  index,
  newFriend as new,
  updateFriendList as update
}