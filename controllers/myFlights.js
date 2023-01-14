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
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res){
  console.log(req.body)
  MyFlight.create(req.body)
  .then(myFlight => {
    res.redirect('/myFlights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newFlight as new,
  create
}