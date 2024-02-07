//DEPENDENCIES
const express = require('express')
const {Trip} = require('../models')

//Trips index action
const index = async (req, res, next) => {
    try {
        //get all places
        res.json(await Trip.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

//Trips create action
const create = async (req, res, next) => {
    try {
        //get all places
        res.json(await Trip.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

//Trips show action
const show = async (req, res, next) => {
    try {
        //get all places
        res.json(await Trip.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

module.exports = {
    index,
    create,
    show
}