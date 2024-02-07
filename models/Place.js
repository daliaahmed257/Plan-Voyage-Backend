//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//MODELS
const PlaceSchema = new Schema({
    country: String,
    city: String,
    image: String,
    description: String,
}, {timestamps: true});

module.exports = mongoose.model("Place", PlaceSchema);

