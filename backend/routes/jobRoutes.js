const express = require('express');
const router  = express.Router();

const {
    getAllJobs,
    createJob
}             = require('../controllers/jobControllers');

router.get('/',getAllJobs);

router.post('/',createJob);

module.exports=router;