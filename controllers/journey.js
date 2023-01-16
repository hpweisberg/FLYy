import { Journey } from "../models/journey.js";

function index(req, res){
  Journey.find({})
  .then(journey => {
    res.render('journey/index', {
      journey,
      title: "Journey"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

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
  Journey.findById(req.params.id)
  .then(journey => {
    res.render('journey/show', {
      title: 'Journey Detail',
      journey,
    })
  })
}

function edit(req, res){
  Journey.findById(req.params.id)
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
  Journey.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(journey => {
    res.redirect(`/journey/${journey._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}


function deleteJourney(req, res){
  Journey.findByIdAndDelete(req.params.id)
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