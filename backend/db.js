const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace with your MongoDB connection string
        // If using local MongoDB: 'mongodb://localhost:27017/myStore'
        // If using MongoDB Atlas: 'mongodb+srv://...'
        await mongoose.connect('mongodb://localhost:27017/myStore');
        console.log('MongoDB Connected Successfully');
    } catch (err) {
        console.error('Connection Failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;