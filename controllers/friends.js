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
  Profile.find({})
  .then(profile => {
    res.render('friends/new', {
      title: 'Add Friend',
      Profile,
      // flightDate: departsDate,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


export {
  index,
  newFriend as new
}