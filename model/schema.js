const mongoose = require("mongoose");

let Schema = mongoose.Schema({
    name: { type: String, trim : true},
    contact: { type: Number },
    email : {type:String,default : ""},
    section : {type : String, default : ""},
    rollNumber : {type : Number, default : 0},
    password : {type:Number},
    isWinner : {type : Boolean, default : false},
    hitCount : {type : Number, default : 0}
});

let model = mongoose.model('user', Schema);

module.exports = model;