require('dotenv').config();

const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const jRts     = require('./routes/jobRoutes');

//Initiate express app:
const app      = express();

app.use(express.json());
app.use(cors());

app.use('/api/jobs',jRts);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log("Successfully connected to Database and listening to requests!")});
}).catch(error=>{console.log(error)});