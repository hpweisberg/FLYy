import mongoose from 'mongoose'

const Schema = mongoose.Schema

const myJourneySchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  date: Date,
  journalPost: String,
  likes: Number,
  hasLiked: [{ type: Schema.Types.ObjectId, ref: 'Profile'}]
}, {
  timestamps: true
})

const MyJourney = mongoose.model('myJourney', myJourneySchema)

export {
  MyJourney
}
