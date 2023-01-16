import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  friendId: { type: Schema.Types.UUID, auto: true },
  flight: { type: Schema.Types.ObjectId, ref: 'Flight'},
  journey: { type: Schema.Types.ObjectId, ref: 'Journey'},
  friends: [{ type: Schema.Types.ObjectId, ref: 'Profile'}],
  blockedFriends: [{ type: Schema.Types.ObjectId, ref: 'Profile'}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
