const express = require('express');
const router=express.Router();
const Bootcamp = require('../models/Bootcamp');

// exports.getBootcamp = (req,res,next) => {
//     res
//     .status(200)
//     .json({success:true})
// };

//create bootcamps
try{
    exports.createBootcamp = async (req,res,next)=>{
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({success:true,data:bootcamp});
        console.log(req.body);
    };
}catch(err){
    res.status(400).json({success:false});
}

//get bootcamps
try{
    exports.getBootcamps = async (req,res,next)=>{
        const bootcamp = await Bootcamp.find();
        res.status(201).json({success:true,data:bootcamp});
    };
}catch(err){
    res.status(400).json({success:false});
}

//get a bootcamp

exports.getaBootcamp = async (req,res,next)=>{
    try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id);
        if(!bootcamp){
            return res.status(400).json({success:false});
        }
        res.status(201).json({success:true,data:bootcamp});
    }catch(err){
        res.status(400).json({success:false});
}
};

//Update a bootcamp
exports.updateBootcamp = async (req,res,next)=>{
    try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators:true}
        );
        console.log(bootcamp);
        if(!bootcamp){
            return res.status(400).json({success:false});
        }
        res.status(201).json({success:true,data:bootcamp});
    }catch(err){
        res.status(400).json({success:false});
}
};

//Delete a bootcamp
exports.deleteBootcamp = async (req,res,next)=>{
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        res.status(201).json({success:true,data:{}});
    }catch(err){
        res.status(400).json({success:false});
 }
};

