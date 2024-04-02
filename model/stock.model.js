
const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;



const stockSchema = new Schema({

    sno: {
        type: Number,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, );



const StockModel = db.model('stock', stockSchema);

module.exports = StockModel;