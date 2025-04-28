const Job = require('../models/jobsModel');
const mongoose = require('mongoose');

//Get all jobs : 
const getAllJobs = async (req,res) => {
    const jobs = await Job.find({}).sort({createdAt:-1});
    return res.status(200).json(jobs);
}

//Create a job posting : 
const createJob = async (req,res) => {
    try{
        const new_job = await Job.create({...req.body});
        return res.status(200).json(new_job);
    } catch (error) {
        return res.status(404).json({error:error.message});
    }

}

module.exports = {getAllJobs, createJob};