const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
const Influencer = require('../models/influencerModel');

// @desc register new influencer (def : rol user)
//@Path POST/api/influencer/register
//@access Public
exports.register = async(req,res)=>{
try {
    const {firstName,lastName,email,password,phone,avatar} = req.body;
    const existEmail = await Influencer.findOne({email});
    if (existEmail) return res.status(400).json({msg:'Email already exist'});
    const hashedPw = await bcrypt.hash(password,10);
    const newInfluencer = await Influencer.create({firstName,lastName,email,password:hashedPw,phone,avatar})
    const token = jwt.sign({id:newInfluencer._id},process.env.JWT_SECRET);
    res.json({ newInfluencer, token });

} catch (error) {
 res.status(500).json({msg:'somthing went wrong'}); 
}
};

// @desc influencer login 
//@Path POST/api/influencer/login
//@access Public
exports.login = async (req,res)=>{
    try {
        const { email, password} = req.body;
        const existInfluencer = await Influencer.findOne({email});
        if (!existInfluencer) return res.status(400).json({msg:'you should register'}); 
        const checkPw = await bcrypt.compare(password, existInfluencer.password);
        if (!checkPw) return res.status(400).json({msg:'Wrong password, Try again'}); 
        const token = jwt.sign({id: existInfluencer._id}, process.env.JWT_SECRET);
        res.json({ existInfluencer, token});
 
    } catch (error) {
        console.log(error),
        res.status(500).json({msg:'somthing went wrong'});
    }
};
// @desc get influencer(def : rol user)
//@Path get/api/influencer/:influencer
//@access private user
exports.getInfluencerData = async(req,res)=>{
    try {
       const influencers = await Influencer.find();
       res.status(200).json(influencers);

    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'}); 
    }
};
// @desc get influencer(def : rol influencer)
//@Path get/api/influencer/:inflId
//@access private INfluencer

exports.getInfluencer = async(req,res)=>{
    try {
       const influencers = await Influencer.findById(req.params.id);
       res.status(200).json(influencers);

    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'}); 
    }
};
exports.addInfluencer = async(req,res)=>{
    try {
       const newInfluencer = await Influencer.create({...req.body });
       res.status(201).json(newInfluencer);

    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'}); 
    }
};


// @desc update influencer(def : rol user)
//@Path put/api/influencer/:influenId
//@access private user
exports.deleteInfluencer = async(req,res)=>{
    try {
        await Influencer.findByIdAndDelete( req.params.inflId  );
       res.status(200).json({msg:'influencer deleted'});

    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'}); 
    }
};


// @desc udelete influencer(def : rol user)
//@Path delete/api/influencer/:influenId
//@access private user
exports.updateInfluencer = async(req,res)=>{
    try {
        await Influencer.findByIdAndUpdate(
           req.params.inflId,
           {...req.body},
           {new: true}
           );
       res.status(200).json({msg:'influencer updated'});

    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'}); 
    }
};


