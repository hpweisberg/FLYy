import { MyFlight } from "../models/myFlight.js";
import { Profile } from "../models/profile.js";

function index(req, res){
  MyFlight.find({})
  .then(myFlights => {
    res.render('myFriends/index', {
      myFlights,
      title: "myFriends"
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