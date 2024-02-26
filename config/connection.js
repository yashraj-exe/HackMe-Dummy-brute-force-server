const mongoose = require("mongoose");
async function connectDB() {
    try {
        mongoose.set('strictQuery', true);
        const options = {
            dbName : "HACKME"
        }
        await mongoose.connect("mongodb://0.0.0.0:27017/HACKME",options);
        console.log("Successfully connected to the database.");
    } catch (error) {
        console.log("Unable to connect with the database:", error.message);
    }
}

module.exports = connectDB;