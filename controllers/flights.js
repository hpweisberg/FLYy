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
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res){
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      title: 'Flight Detail',
      flight,
    })
  })
}

export {
  index,
  newFlight as new,
  create,
  show,
}