const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;



const locationSchema = new Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
}, { timestamps: true });



const LocationModel = db.model('location', locationSchema);

module.exports = LocationModel;