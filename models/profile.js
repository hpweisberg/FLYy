import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const Schema = mongoose.Schema

const journeySchema = new Schema({
  journeyDate: Date,
  journeyPost: String,
  journeyCreator: { type: Schema.Types.ObjectId, ref: 'Profile'},
  hasLiked: [{ type: Schema.Types.ObjectId, ref: 'Profile'}]
}, {
  timestamps: true
})


const profileSchema = new Schema({
  name: String,
  avatar: String,
  friendId: { type: String,default:function(){
    return uuidv4().slice(9,23)
  }},
  flights: [{ type: Schema.Types.ObjectId, ref: 'Flight'}],
  journeys: [journeySchema],
  friends: [{ type: Schema.Types.ObjectId, ref: 'Profile'}],
  blockedFriends: [{ type: Schema.Types.ObjectId, ref: 'Profile'}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
