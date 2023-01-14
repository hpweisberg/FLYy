import { Journey } from "../models/journey.js";

function index(req, res){
  Journey.find({})
  .then(journey => {
    res.render('journey/index', {
      journey,
      title: "journey"
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