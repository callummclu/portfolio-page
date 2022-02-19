if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
} 

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

const portfolioRouter = require('./routes/portfolio')
const ProjectModel = require('./Models/project')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}, err =>{
	console.log('connected')
})

var db = mongoose.connection;

db.on('error', console.error.bind(console,'MongoDB connection error'))

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/portfolio',portfolioRouter);

module.exports = app;