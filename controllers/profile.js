import { Profile } from "../models/profile.js";

function index(req, res){
  Profile.find({})
  .then(profile => {
    res.render('profile/index', {
      profile,
      title: "Profile"
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

