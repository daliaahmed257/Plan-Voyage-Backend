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

require('./config/passport.js')

// import places router
const placesRouter = require('./routes/places.js')
const tripsRouter = require('./routes/trips.js')

const cors = require("cors")
const morgan = require("morgan")

var session = require('express-session')
var passport = require('passport')



//MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies

app.use(cors()); // to minimize cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
  });

app.use('/explore', placesRouter)
app.use('/mytrips', tripsRouter)


//ROUTES
app.get("/", (req, res) => {
    res.send("hello world")
})



//LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
