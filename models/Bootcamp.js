const mongoose = require('mongoose');
const bootCampSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter a name'],
        unique:true,
        maxlength:[40,'name cannot be more tha 40 characters']
    },
    user:{
        type:String,
        required:true,
        enum : ['user','publisher']
    },
    description:{
        type:String,
        required:[true,'please enter a description'],
        maxlength:[200,'descrription too long']
    },
    phone:{
        type:String,
        length:11,
        match:[/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,'please enter the valid url with http or https']
    },
    email:{
        type:String,
        required:true,
        length:11,
        match:[/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'invalid email']
    },
    website:{
        type: String,
        length:11,
        match:[/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,'invalid website']
    },
    slug:String,
    createdAt:{
        type: Date,
        default : Date.now
    }
});
module.exports=mongoose.model('Bootcamp',bootCampSchema);
//should now be able to use this model.