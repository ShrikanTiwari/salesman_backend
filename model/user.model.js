const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    otherPurpose: {
        type: String,
        required: true
    },
    // area: {
    //     type: String,
    //     required: true
    // },
    distributor: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        //required: true
    }
},{timestamps:true});


const UserModel = db.model('user', userSchema);
module.exports = UserModel;
