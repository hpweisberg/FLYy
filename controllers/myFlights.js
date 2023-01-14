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

function newFlight(req, res){
  res.render('myFlights/new', {
    title: 'Add Flight',
  })
}

export {
  index,
  newFlight as new,
}