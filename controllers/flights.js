import { Flight } from "../models/flight.js";

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
  // const newFlight = new Flight()
  // const dt = newFlight.flightDate
  // const departsDate = dt.toISOString().slice(0, 16)
  res.render('flights/new', {
    title: 'Add Flight',
    // flightDate: departsDate,
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
    res.redirect('/flights')
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

// function show(req, res){
//   Flight.findById(req.params.id)
//   .then(flight => {
//     res.render('flights/show', {
//       title: 'Flight Detail',
//       flight,
//       // flights,
//     })
//   })
//   Flight.find({})
// }

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