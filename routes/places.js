// DEPENDENCIES
const express = require("express")
const router = express.Router()

const placesCtrl = require('../controllers/places')

//ROUTES

//PLACES INDEX ROUTE
router.get("/", placesCtrl.index)

//PLACES CREATE ROUTE
router.post("/", placesCtrl.create)

//PLACES SHOW ROUTE
router.get("/:id", placesCtrl.show);

module.exports = router
