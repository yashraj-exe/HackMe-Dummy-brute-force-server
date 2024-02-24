const mongoose = require("mongoose");
async function connectDB() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect("mongodb://0.0.0.0:27017/HACKME");
        console.log("Successfully connected to the database.");
    } catch (error) {
        console.log("Unable to connect with the database:", error.message);
    }
}

module.exports = connectDB;