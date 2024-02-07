// DEPENDENCIES
const express = require("express")
const router = express.Router()

const tripsCtrl = require('../controllers/trips')

//ROUTES

//TRIPS INDEX ROUTE
router.get("/", tripsCtrl.index)

//TRIPS CREATE ROUTE
router.post("/", tripsCtrl.create)

//TRIPS SHOW ROUTE
router.get("/:id", tripsCtrl.show)

module.exports = router