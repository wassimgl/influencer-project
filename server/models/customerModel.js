const mongoose = require('mongoose');

const customerSchema= mongoose.Schema({
    
    firstName:{
        type : String,
        required : true,
    } ,
    lastName:{
        type : String,
        required : true,
    } ,
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
    phone: {
        type : String,
        required : true,
    } ,
    address: {
        type : String,
        required : true,
    } ,
    city: {
        type : String,
        required : true,
    } ,
    country: {
        type : String,
        required : true,
    } ,
    
 customerCreatedAt:{
    type : Date,
default: new Date()} ,
customerUpdatedAt: {
    type : Date,
default: new Date()},
lastLogin: {
    type : Date,
default: new Date()},
status: Boolean,
avatar: String,

})
module.exports= mongoose.model('customer',customerSchema);