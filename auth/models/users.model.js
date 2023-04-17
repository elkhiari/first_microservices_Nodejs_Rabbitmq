const mongoose = require('mongoose');


const Users = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'FirstName required'],
        uppercase:true
    },
    lastName:{
        type:String,
        required:[true,'LastName:required'],
        uppercase:true
    },
    email:{
        type:String,
        required:[true,'Email required'],
        unique:[true,'Email unique'],
        uppercase:true,
        trime:true
    },
    mobile:{
        type:String,
        required:[true,'mobile required'],
    },
    password:{
        type:String,
        required:[true,'Password required']
    },
    birthdate:{
        type:Date
    },
    createdAt:{
        type:Date,
        default:new Date
    }
})


module.exports = mongoose.model("Users",Users)