//DEPENDENCIES
// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

//import express
const express = require("express");

//create application object
const app = express();

// initialize .env variables
require("dotenv").config();

// start the mongoose db connection
require('./config/db.connection.js')

// import places router
const placesRouter = require('./routes/places.js')


//MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies

app.use('/places', placesRouter)

//ROUTES

app.get("/", (req, res) => {
    res.send("hello world")
})

//LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))

