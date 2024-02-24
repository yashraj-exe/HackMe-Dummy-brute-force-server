const mongoose = require("mongoose");
// let Schema = mongoose.Schema({
//     name: { type: String, trim : true},
//     contact: { type: Number },
//     registrationDate: { type: String },
//     registrationCloseDate: { type: String, default: "" },
//     type: { type: String, default: "" },
//     note: { type: String, default: "" },
//     owner: { type: String, default: "" },
//     amount: { type: String },
//     additionalAmount: { type: Array },
//     interestAmount : {type:Number},
//     email : {type:String},
//     password : {type:String}
// });
let Schema = mongoose.Schema({
    name: { type: String, trim : true},
    contact: { type: Number },
    email : {type:String,default : ""},
    password : {type:String},
    isWinner : {type : Boolean, default : false},
    hitCount : {type : Number, default : 0}
});

let model = mongoose.model('user', Schema);

module.exports = model;