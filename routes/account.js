const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')

const User = require("../Models/users.js")

router.get('/logout',(req,res)=>{
	req.logout();
	req.flash('success_msg','Now logged out');
	res.redirect('../../..');

})

router.post('/register',(req,res)=>{
	const {name,email,password,password2} = req.body;
	User.findOne({email : email}).exec((err,user)=>{
		const newUser = new User({
            name : name,
            email : email,
            password : password
        })
        bcrypt.genSalt(10,(err,salt)=> 
        bcrypt.hash(newUser.password,salt,
            (err,hash)=> {
                if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
	                    .then((value)=>{
		                    console.log(value)
		                    req.flash('success_msg','You have now registered!')

        		            res.redirect('../../../../login');
                    })
                    .catch(value=> console.log(value));
                      
                }));
	})
})

router.post('/login',(req,res,next)=>{
	passport.authenticate('local',{
	successRedirect : '../../..',
	failureRedirect : '../../login',
	failureFlash : true,
	})(req,res,next);
})

router.get('/is_authenticated',(req,res)=>{
    if (req.user) {
        res.json({message:true,user:req.user});
    } else {
        res.json({
            message:false
        });
    }
})

module.exports = router;