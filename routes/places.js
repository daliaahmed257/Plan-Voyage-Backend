// DEPENDENCIES
const express = require("express")
const router = express.Router()

//ROUTES

//PLACES INDEX ROUTE
router.get("/", async (req, res) => {
    res.status(200).json({message: "places index route"})
})

module.exports = router
