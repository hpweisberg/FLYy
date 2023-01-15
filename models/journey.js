import mongoose from 'mongoose'

const Schema = mongoose.Schema

const journeySchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  journeyDate: Date,
  journeyPost: String,
  likes: Number,
  hasLiked: [{ type: Schema.Types.ObjectId, ref: 'Profile'}]
}, {
  timestamps: true
})

const Journey = mongoose.model('Journey', journeySchema)

export {
  Journey
}
