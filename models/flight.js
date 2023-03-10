import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  flightNo: Number,
  flightDate: Date,
  airline: String,
  departureAirport: String,
  arrivalAirport: String,
  departureTime: Date,
  arrivalTime: Date,
  departureTerminal: String,
  arrivalTerminal: String,
  isFlying: Boolean,
  arrivalWeather: String,
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
