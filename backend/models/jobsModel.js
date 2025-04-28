const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title       : {type:String,required:true},
    company     : {type:String,required:true},
    loc         : {type:String,required:true},
    exp         : {type:String,required:true},
    type        : {type:String,enum:['FullTime','PartTime','Internship','Contract'],required:true},
    salary      : {type:String,required:true},
    deadline    : {type:String,required:true},
    description : {type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model('cbmjob',jobSchema)