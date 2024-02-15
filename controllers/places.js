//DEPENDENCIES
const express = require('express')
const {Place} = require('../models')

//Places index action
const index = async (req, res, next) => {
    try {
        //get all places
        res.json(await Place.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

//Places create action
const create = async (req, res, next) => {
    try {
        res.json(await Place.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

//Places show action
const show = async (req, res, next) => {
    try {
        //get one place
        res.json(await Place.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
}

module.exports = {
    index,
    show,
    create
}