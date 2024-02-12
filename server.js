//DEPENDENCIES
// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

//import express
const express = require("express");

//create application object
const app = express();

// start the mongoose db connection
require('./config/db.connection.js')

// import routers
const placesRouter = require('./routes/places.js')
const tripsRouter = require('./routes/trips.js')
const AuthRouter = require('./routes/AuthRouter')
const ActivityRouter = require('./routes/activities.js')

const cors = require("cors")
const morgan = require("morgan")

//MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies

app.use(cors()); // to minimize cors errors, open access to all origins
app.use(morgan("dev")); // logging for development


app.use('/explore', placesRouter)
app.use('/mytrips', tripsRouter)
app.use('/auth', AuthRouter)
app.use('/mytrips', ActivityRouter)


//ROUTES
app.get("/", (req, res) => {
    res.send("hello world")
})


//LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
