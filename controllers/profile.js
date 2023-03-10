import { Profile } from "../models/profile.js";

function index(req, res){
  Profile.findById(req.user.profile)
  .populate('flights')
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
    req.body.journeyCreator = req.user.profile._id
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

function editJourney(req, res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    const journeyDoc = profile.journeys?.id(req.params.journeyId)
    if (journeyDoc.journeyCreator.equals(req.user.profile._id)) {
      res.render('profiles/journeys/editJourney', {
        profile,
        journey: journeyDoc,
        title: 'Edit Journey'
      })
    }

  })
}

function deleteJourney(req, res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    const journeyDoc = profile.journeys.id(req.params.journeyId)
    if (journeyDoc.journeyCreator.equals(req.user.profile._id)) {
      profile.journeys.remove(journeyDoc)
      profile.save()
      .then(() => {
        res.redirect(`/profiles/${profile._id}`)
      })
      .catch(error => {
        console.log(error)
        res.redirect('/')
      })
    } else {
      throw new Error('Can not delete')
    }
  })    .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function updateJourney(req, res){
  Profile.findById(req.params.profileId)
  .then(profile => {
    const journeyDoc = profile.journeys.id(req.params.journeyId)
    if (journeyDoc.journeyCreator.equals(req.user.profile._id)) {
      journeyDoc.set(req.body)
      profile.save()
      .then(() => {
        res.redirect(`/profiles/${profile._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect('/profiles')
      })
    } else {
      throw new Error('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function friendsIndex(req, res){
  Profile.findById(req.user.profile._id)
  .populate('friends')
  .populate('flights')
  .then(profile => {
    res.render('profiles/friends/index', {
      profile,
      title: "Friends",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


function newFriend(req, res){
  Profile.findById(req.user.profile)
  .then(profile => {
    console.log(profile)
    res.render('profiles/friends/new', {
      title: 'Add Friend',
      profile,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function updateFriendList(req, res){
  Profile.findById(req.user.profile._id)
  .then(userProfile => {
    Profile.findOne({friendId: req.body.friends})
    .then(friendProfile => {
      userProfile.friends.push(friendProfile._id)
      userProfile.save()
      .then(() => {
        res.redirect(`/profile/friends`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
}


function showFriends(req, res){
  Profile.findById(req.params.friendId)
  .populate('flights')
  .then(profile => {
    res.render(`profiles/friends/show`, {
      title: `${profile.name}'s Details`,
      profile,
    })
  })
}




export {
  index,
  createJourney,
  showProfile,
  editJourney,
  deleteJourney,
  updateJourney,
  friendsIndex,
  newFriend,
  updateFriendList,
  showFriends,
}

