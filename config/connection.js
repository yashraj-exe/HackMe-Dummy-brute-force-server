const mongoose = require("mongoose");
async function connectDB() {
    try {
        mongoose.set('strictQuery', true);
        const options = {
            dbName : "HACKME"
        }
        await mongoose.connect("mongodb://0.0.0.0:27017/HACKME",options);
        // await mongoose.connect("mongodb+srv://<username>:<password>@cluster0.ugnodjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",options);
        console.log("Successfully connected to the database.");
    } catch (error) {
        console.log("Unable to connect with the database:", error.message);
    }
}

module.exports = connectDB;