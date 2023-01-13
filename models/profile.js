import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  avatar: String,
  friendId: Number,
  myFlight: { type: Schema.Types.ObjectId, ref: 'myFlight'},
  myJourney: { type: Schema.Types.ObjectId, ref: 'myJourney'},
  myFriends: [{ type: Schema.Types.ObjectId, ref: 'Profile'}],
  blockedFriends: [{ type: Schema.Types.ObjectId, ref: 'Profile'}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
