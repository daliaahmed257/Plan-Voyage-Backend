//DEPENDENCIES
const express = require('express')
const {Trip} = require('../models')


//stay create action
const create = async (req, res, next) => {
    const trip = await Trip.findById(req.params.id);
    console.log(trip)
    try {
        trip.flights.push(req.body)
        await trip.save()
        res.json(trip)
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

module.exports = {
    create
}
