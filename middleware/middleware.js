function passDataToView(req, res, next) {
  res.locals.user = req.user ? req.user : null
  res.locals.googleClientID = process.env.GOOGLE_CLIENT_ID
  next()
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}

// function makeFriendCode(req, res, next){
//   if (req.profile.friendId === null){
//     console.log(uuid())
//   }
// }


export {
  passDataToView,
  isLoggedIn,
  // makeFriendCode
}
