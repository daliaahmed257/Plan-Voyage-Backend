//DEPENDENCIES
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ActivitySchema = new Schema({
    activity: String,
    link: String,
    time: Date,
    Trip: {
        type: Schema.Types.ObjectId,
        ref: 'Trip'
    }
})

module.export = mongoose.model("Activity", ActivitySchema)