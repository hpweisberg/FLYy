import { Profile } from "../models/profile.js";

function index(req, res){
  // console.log(journey.owner)
  Profile.findById(req.params.id)
  .populate('journeys')
  .then(journeys => {
    res.render('journey/index', {
      journeys,
      Profile,
      title: "Journey"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}
// function index(req, res){
//   console.log(journey.owner)
//   Profile.find({})
//   .then(journey => {
//     res.render('journey/index', {
//       journey,
//       title: "Journey"
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/')
//   })
// }

function newJourney(req,res){
  res.render('journey/new', {
    title: "New Journey",
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res){
  req.body.owner = req.user.profile._id
  Journey.create(req.body)
  .then(journey => {
    res.redirect('/journey')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res){
  Profile.findById(req.params.id)
  .then(journey => {
    res.render('journey/show', {
      title: 'Journey Detail',
      journey,
    })
  })
}

function edit(req, res){
  Profile.findById(req.params.id)
  .then(journey => {
    res.render('journey/edit', {
      title: 'Edit Journey',
      journey,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}


function updateJourney(req, res){
  Profile.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(journey => {
    res.redirect(`/journey/${journey._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}


function deleteJourney(req, res){
  Profile.findByIdAndDelete(req.params.id)
  .then(journey => {
    res.redirect('/journey')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  newJourney as new,
  create,
  show,
  edit,
  updateJourney as update,
  deleteJourney as delete,

}