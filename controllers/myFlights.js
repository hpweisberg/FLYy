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
  // const newFlight = new MyFlight()
  // const dt = newFlight.flightDate
  // const departsDate = dt.toISOString().slice(0, 16)
  res.render('myFlights/new', {
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
  MyFlight.create(req.body)
  .then(myFlight => {
    res.redirect('/myFlights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res){
  MyFlight.findById(req.params.id)
  .then(myFlight => {
    res.render('myFlights/show', {
      title: 'MyFlight Detail',
      myFlight,
    })
  })
}

export {
  index,
  newFlight as new,
  create,
  show,
}