import { MyJourney } from "../models/myJourney.js";

function index(req, res){
  MyJourney.find({})
  .then(MyJourney => {
    res.render('myJourney/index', {
      MyJourney,
      title: "myJourney"
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