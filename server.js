const express = require('express');
const app = express();

const CONFIG = require("./config.json")

const connectDB = require("./config/connection");
connectDB();


app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.use("/",require("./routes/api_routes"));



app.listen(CONFIG.PORT, () => {
  console.log('Server is running on port 3000');
});


