import { Profile } from "../models/profile.js";

function index(req, res){
  Profile.findById(req.user.profile)
  .then(profile => {
    console.log(profile, "index")
    res.render('profiles/userProfile', {
      profile,
      title: "Profile"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}


// function edit(req, res){
//   // req.body.owner = req.user.profile._id
//   Profile.findById(req.params.id)
//   .then(profile => {
//     res.render('profile', {
//       profile
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/')
//   })
// }

// function updateFriendId(req, res){
//   Profile.findByIdAndUpdate(req.params.id, req.body, {new:true})
//   .then(profile => {
//     res.redirect(`/profile/${profile._id}`)
//   })
//   .catch(error => {
//     console.log(error)
//     res.redirect('/')
//   })
// }

function showProfile(req, res){
  Profile.findById(req.params.id)
  .populate('journeys')
  .then(profile => {
    res.render(`profiles/show`, {
      title: `${profile.name}'s Profile`,
      profile,
    })
  })
  
}

function createJourney(req, res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.journeys.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${profile._id}`)
    })
      .catch(error => {
        console.log(error)
        res.redirect('/')
      })
  })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}






export {
  index,
  createJourney,
  showProfile,
  // edit,
  // show,
  // updateFriendId as update,
}

