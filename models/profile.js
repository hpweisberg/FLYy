import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  friendId: { type: String,default:function(){
    return uuidv4().slice(9,23)
  }},
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
