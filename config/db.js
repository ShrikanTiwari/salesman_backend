const mongoose = require('mongoose');

// Connect to MongoDB
const connection = mongoose.createConnection('mongodb+srv://tiwarishrikant774:shrikant123@cluster0.fgr2cjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Listen for connection events
connection.on('open', () => {
    console.log('MongoDB Connected');
}).on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

module.exports = connection;
