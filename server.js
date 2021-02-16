const express = require('express');
const dotenv= require('dotenv');
const colors= require('colors')
const bootcamp = require('./routes/bootcamp');
const router=express.Router();
const morgan = require('morgan');
const logger = require('./middleware/logger');
const mongoose = require('mongoose');

//configuration variable pathn
dotenv.config({path:'./config/config.env'});

//connect to mongoDB database
const connectDB = require('./config/db');
connectDB();

//initialize express
const app=express();

const port = process.env.PORT||5000;

//call logger middleware
app.use(logger);

//morgan is a third party middleware with more extensive logging,we only what to run in development
if (process.env.NODE_ENV=== "development"){
    app.use(morgan('dev'))
}

app.use(express.json());
    

// For handling unhandled promise rejections
const server=app.listen(port);
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error: ${err.message}`.blue);
    server.close(()=>process.exit(1));
})
app.use('/api/v1/bootcamp',bootcamp);

