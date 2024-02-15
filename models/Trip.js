//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//MODELS

const StaySchema = new Schema({
    name: String,
    link: String,
    startDate: Date,
    endDate: Date
})

const FlightSchema = new Schema({
    airline: String,
    flightNum: String,
    depCity: String,
    arrCity: String,
    date: Date,
    depTime: String,
    arrTime: String
})

const TripSchema = new Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    startDate: {
        type: Date,
        // required: true
    },
    endDate: {
        type: Date,
        // required: true
    },
    stay: [StaySchema],
    flights: [FlightSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});


module.exports = mongoose.model("Trip", TripSchema);

