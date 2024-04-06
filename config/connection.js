require('dotenv').config()
const mongoose = require("mongoose");

async function connectDB() {
    try {
        mongoose.set('strictQuery', true);
        const options = {
            dbName : "HACKME"
        }
        await mongoose.connect(process.env.BASEURL_MONGO,options);
        // await mongoose.connect("mongodb+srv://<username>:<password>@cluster0.ugnodjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",options);
        console.log("Successfully connected to the database.");
    } catch (error) {
        console.log("Unable to connect with the database:", error.message);
    }
}

console.log(process.env.BASEURL_MONGO)

module.exports = connectDB;