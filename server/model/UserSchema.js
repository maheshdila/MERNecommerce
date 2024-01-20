const mongoose = require('mongoose');   //import mongoose
const UserSchema = new mongoose.Schema({   //create schema
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    activeState:{
        type:Boolean,
        required:true
    },
    userType:{
        type:String,
        required:true
    }
});