if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
} 
require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
require("./config/passport")(passport)


const app = express();

const APIRouter = require('./routes/API')

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
app.use(session({secret : 'secret', resave : true, saveUninitialized : true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error  = req.flash('error');
next();
})
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use('/API',APIRouter);


app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;