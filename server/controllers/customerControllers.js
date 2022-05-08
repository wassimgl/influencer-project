const Customer = require('../models/customerModel');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
const Influencer = require('../models/influencerModel');

// @desc register new person (def : rol user)
//@Path POST/api/customer/register
//@access Public
exports.register = async(req,res)=>{
try {
    const {firstName,lastName,email,password,phone,address,city,country} = req.body;
    const existEmail = await Customer.findOne({email});
    if (existEmail) return res.status(400).json({msg:'Email already exist'});
    const hashedPw = await bcrypt.hash(password,10);
    const newCustomer = await Customer.create({firstName,lastName,email,password:hashedPw,phone,address,city,country})
    const token = jwt.sign({id:newCustomer._id},process.env.JWT_SECRET);
    res.json({ newCustomer, token });

} catch (error) {
 res.status(500).json({msg:'somthing went wrong'}); 
}
};
// @desc customer login 
//@Path POST/api/customer/login
//@access Public
exports.login = async (req,res)=>{
    try {
        const { email, password} = req.body;
        const existCustomer = await Customer.findOne({email});
        if (!existCustomer) return res.status(400).json({msg:'you should register'}); 
        const checkPw = await bcrypt.compare(password, existCustomer.password);
        if (!checkPw) return res.status(400).json({msg:'Wrong password, Try again'}); 
        const token = jwt.sign({id: existCustomer._id}, process.env.JWT_SECRET);
        res.json({ existCustomer, token});
 
    } catch (error) {
        console.log(error),
        res.status(500).json({msg:'somthing went wrong'});
    }
};

exports.getCustomerData = async(req,res)=>{
    try {
       const customerInfo = await Customer.find();
       res.status(201).json(customerInfo);

    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'}); 
    }
};

// @desc update influencer(def : rol user)
//@Path put/api/influencer/:influenId
//@access private user
exports.deleteCustomer = async(req,res)=>{
    try {
        await Customer.findByIdAndDelete( req.params.custId  );
       res.status(200).json({msg:'customer deleted'});

    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'}); 
    }
};


// @desc udelete influencer(def : rol user)
//@Path delete/api/influencer/:influenId
//@access private user
exports.updateCustomer = async(req,res)=>{
    try {
        await Customer.findByIdAndUpdate(
           req.params.custId,
           {...req.body},
           {new: true}
           );
       res.status(200).json({msg:'customer updated'});

    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'}); 
    }
};


exports.searchInfluencer = async(req,res)=>{
    try {
       const influencerSear = await Influencer.find({firstName: req.body.key});
       res.json(influencerSear);

    } catch (error) {
        res.status(500).json({msg:'somthing went wrong'}); 
    }
};