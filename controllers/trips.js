//DEPENDENCIES
const express = require('express')
const {Trip} = require('../models')
const {User} = require('../models')

//Trips index action
const index = async (req, res, next) => {
    try {
        const userId =req.params.id
        const trips = await Trip.find({ user: userId });
        res.json(trips);
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

//Trips create action
const create = async (req, res, next) => {
    console.log(req.body)
    try {
        const userId = req.body.user;
        const tripData = { ...req.body, user: userId }
        res.json(await Trip.create(tripData));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

//Trips show action
const show = async (req, res, next) => {
    try {
        res.json(await Trip.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

//Trips delete action
const destroy = async (req, res, next) => {
    try {
        res.json(await Trip.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error)
    }
}

//Trips update action
const update = async (req, res, next) => {
    try {
        res.json(await Trip.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    index,
    create,
    show,
    delete: destroy,
    update
}