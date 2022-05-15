const User = require('../models/userModel');

const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc add new user
//@Path POST/api/user
//@access Private/admin
exports.addUser = async(req,res)=>{
    try {

        const {firstName,lastName,email,password,phone,country} = req.body;
    const existEmail = await User.findOne({email});
    if (existEmail) return res.status(400).json({msg:'Email already exist'});
    const hashedPw = await bcrypt.hash(password,10);

        const newUser = await User.create({firstName,lastName,email, password: hashedPw,phone, country});

        res.status(201).json(newUser);
 
     } catch (error) {
         res.status(500).json({msg:'somthing went wrong'}); 
     }
   };

   // @desc get users
//@Path GET/api/user
//@access Private/admin
exports.getUser = async(req,res)=>{
    try {
        const users = await User.find();
        res.status(201).json(users);
 
     } catch (error) {
         res.status(500).json({msg:'somthing went wrong'}); 
     }
};

// @desc delete  user
//@Path DELETE/api/user
//@access Private/admin
exports.deleteUser = async(req,res)=>{
    try {
        await User.findByIdAndDelete( req.params.userId  );
       res.status(200).json({msg:'user deleted'});

    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'}); 
    }
};


// @desc update a user
//@Path PUT/api/user
//@access Private/admin
exports.updateUser = async (req,res)=>{
   try{
    await  User.findByIdAndUpdate(req.params.userId, {...req.body}, { new: true })
    res.status(200).json({msg:'user updated'});
}
   catch (error) {
    res.status(500).json({msg:'somthing went wrong'}); 

    };
};
// @desc USER login 
//@Path POST/api/user/login
//@access Public
exports.login = async (req,res)=>{
    try {
        const { email, password} = req.body;
        const existUser = await User.findOne({email});
        if (!existUser) return res.status(400).json({msg:'you should register'}); 
        const checkPw = await bcrypt.compare(password, existUser.password );
        if (!checkPw) return res.status(400).json({msg:'Wrong password, Try again'}); 
        const token = jwt.sign({id: existUser._id}, process.env.JWT_SECRET);
        res.json({existUser, token});
 
    } catch (error) {
        console.log(error),
        res.status(500).json({msg:'somthing went wrong'});
    }
};




  
