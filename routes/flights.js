// DEPENDENCIES
const express = require("express")
const router = express.Router()

const flightsCtrl = require('../controllers/flights')

//ROUTES


//STAY CREATE ROUTE
router.post("/:id/addflight", flightsCtrl.create)


module.exports = router