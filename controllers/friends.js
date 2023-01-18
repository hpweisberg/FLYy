import { Flight } from "../models/flight.js";
import { Profile } from "../models/profile.js";


        

function index(req, res){
  Profile.findById(req.user.profile._id)
  .populate('friends')
  .then(profile => {
    // Profile.find({friends: req.body.friends})
    res.render('friends/index', {
      profile,
      // friends,
      title: "Friends"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newFriend(req, res){
  Profile.findById(req.user.profile)
  .then(profile => {
    console.log(profile)
    res.render('friends/new', {
      title: 'Add Friend',
      profile,
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
//TODO Add Friend
// Find friend array in the profile
// Add the input of the new friend ID to the Profile Model.
// Save updated profile

//! Compare Friends List

// Look into the friends array
// check if profile1 has profile2's firend code and profile2 has profile1's friend code.
//? if (Profile.friendId == Profile.friendId.Profile.friendId){
// If so ----->
// push both friends profile's into each friends view

function friendDetail(req, res){
  if (Profile.friendId == Profile.friendId.Profile.friendId){

    Profile.friendId.findById(req.body)
    .then(friends => {
      res.render('friend/show', {
        title: "Friend Details",
        flight,
        journey,
      })
    })
  }
  }


  function show(req,res){
    //access friends profile
    Profile.findById(req.params.id)
    .then(profile => {
      res.render('profiles/show', {
        title: "friend details",
        profile,
      })
    })
  }


export {
  index,
  newFriend as new,
  updateFriendList as update,
  show
}