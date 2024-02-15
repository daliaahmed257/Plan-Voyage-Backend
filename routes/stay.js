// DEPENDENCIES
const express = require("express")
const router = express.Router()

const stayCtrl = require('../controllers/stay')

//ROUTES


//STAY CREATE ROUTE
router.post("/:id/addstay", stayCtrl.create)


module.exports = router