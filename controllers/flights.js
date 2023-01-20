import { Flight } from "../models/flight.js";
import { Profile } from "../models/profile.js";



function index(req, res){
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights,
      title: "flights"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newFlight(req, res){
  res.render('flights/new', {
    title: 'Add Flight',
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res){
  console.log(req.body)
  req.body.owner = req.user.profile._id
  Flight.create(req.body)
  .then(flight => {
    Profile.findById(req.user.profile._id)
    .then(profile => {
      console.log(profile)
      profile.flights.push(flight._id)
      profile.save()
      .then(() => {
        res.redirect('/flights')
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Flight.find({})
  .then(flights => {
    const flight = flights.find(item => item._id.equals(req.params.id))
    console.log(flight)
    res.render('flights/show', {
      flights,
      flight,
      title: 'Flight Details'
    })
  })
}


function edit(req, res){
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/edit', {
      title: 'Edit Flight',
      flight,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function updateFlight(req, res){
  Flight.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}


export {
  index,
  newFlight as new,
  create,
  show,
  edit,
  updateFlight as update,
  deleteFlight as delete,
}