//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ActivitySchema = new Schema({
    activity: String,
    link: String,
    time: Date,
    date: Date,
    trip: {
        type: Schema.Types.ObjectId,
        ref: 'Trip'
    }
})

module.exports = mongoose.model("Activity", ActivitySchema)