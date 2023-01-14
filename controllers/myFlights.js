import { MyFlight } from "../models/myFlight.js";

function index(req, res){
  MyFlight.find({})
  .then(myFlights => {
    res.render('myFlights/index', {
      myFlights,
      title: "myFlights"
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