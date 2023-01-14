import mongoose from 'mongoose'

const Schema = mongoose.Schema

const myFlightSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  flightNo: Number,
  flightDate: Date,
  airline: String,
  departureAirport: String,
  arrivalAirport: String,
  departureTime: Date,
  arrivalTime: Date,
  isFlying: Boolean,
  arrivalWeather: String,
}, {
  timestamps: true
})

const MyFlight = mongoose.model('myFlight', myFlightSchema)

export {
  MyFlight
}
