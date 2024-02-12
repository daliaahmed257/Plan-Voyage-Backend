// DEPENDENCIES
const express = require("express")
const router = express.Router()

const activitiesCtrl = require('../controllers/activities')

//ROUTES

//ACTIVITIES INDEX ROUTE
router.get("/:tripId/activities/:date", activitiesCtrl.index)

//ACTIVITIES CREATE ROUTE
router.post("/:tripId/activities/:date", activitiesCtrl.create)

module.exports = router