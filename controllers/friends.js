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
  Profile.find({_id:req.user.profile})
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

}


export {
  index,
  newFriend as new,
  updateFriendList as update
}