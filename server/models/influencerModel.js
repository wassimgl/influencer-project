const mongoose= require('mongoose');

const influencerSchema= mongoose.Schema ({
    userName: String,
    bio: String,
 location: String,
 nb_subscribers: Number,
 nb_subscriptions: Number,
 nb_posts: Number,
 average_likes: Number,
 average_comments: Number,
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
 influencerCreatedAt:{
    type : Date,
default: new Date()} ,
influencerUpdatedAt: {
    type : Date,
default: new Date()},
lastLogin: {
    type : Date,
default: new Date()},
status: Boolean,
avatar: {
    type : String,
    required : true,
} ,

})
module.exports=mongoose.model('influencer',influencerSchema);