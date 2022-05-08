const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  
    firstName:{
        type : String,
    },
    lastName:{
        type : String,
    },
    country:{
        type : String,
    },
   
    email:{
        type : String,
        required : true,
        unique : true ,
        match : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    } ,
    password: {
        type : String,
        required : true,
    } ,
    
 adminCreatedAt:{
    type : Date,
default: new Date()} ,
adminUpdatedAt: {
    type : Date,
default: new Date()},
lastLogin: {
    type : Date,
default: new Date()},
status: Boolean,
 active: Boolean,
});

module.exports = mongoose.model('user',userSchema);