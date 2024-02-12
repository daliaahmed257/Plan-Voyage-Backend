//DEPENDENCIES
const express = require('express')
const {Trip} = require('../models')
const {Activity} = require('../models')

//activities index action
const index = async (req, res, next) => {
    try {
        const tripId =req.params.tripId
        console.log('hello')
        const date = new Date(req.params.date)
        const formattedDate = date.toISOString().split('T')[0];
        console.log(formattedDate)
        const activities = await Activity.find({ trip: tripId, date: date });
        res.json(activities);
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

//activities create action
const create = async (req, res, next) => {
    try {
        const tripId = req.params.tripId
        const date = new Date(req.params.date)
        const formattedDate = date.toISOString().split('T')[0];
        console.log(formattedDate)
        const newActivity = await Activity.create({ ...req.body, trip: tripId, date: formattedDate })
        res.json(newActivity)
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}


module.exports = {
    index,
    create
}