// DEPENDENCIES
const express = require("express")
const router = express.Router()
const middleware = require('../middleware')

const tripsCtrl = require('../controllers/trips')

//ROUTES

//TRIPS INDEX ROUTE
router.get("/", tripsCtrl.index)

//TRIPS CREATE ROUTE
router.post("/", 
middleware.stripToken,
middleware.verifyToken,
tripsCtrl.create)

//TRIPS SHOW ROUTE
router.get("/:id", tripsCtrl.show)

module.exports = router