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

export {
  index,
}