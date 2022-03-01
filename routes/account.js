const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')

const User = require("../Models/users.js")

// Logs User out
router.get('/logout',(req,res)=>{
	req.logout();
	req.flash('success_msg','Now logged out');
	res.redirect('../../..');

})

// delete Account
router.delete('/',async (req,res)=>{
    try {
        await User.deleteOne({_id:req.user._id})
        res.redirect('../../..')
    } catch (err) {
        res.status(500).json({
            message:
            err.message
        })
    }
})

// edit Account (NEEDS ADDED)
router.patch('/edit', (req,res)=>{
    try{
        let current_user = User.findOne({_id:req.user._id}).exec((err,user)=>{
            user.email = req.body.email
            user.name = req.body.name        
            user.save()
            res.redirect(`/account`)           
        })

    } catch (err){
        res.status(500).json({
            message:
            err.message
        })
    }
})


// registers new user
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

// logs in user
router.post('/login',(req,res,next)=>{
	passport.authenticate('local',{
	successRedirect : '../../..',
	failureRedirect : '../../login',
	failureFlash : true,
	})(req,res,next);
})

// returns if user is logged in, their permissions level, liked posts.
router.get('/is_authenticated',(req,res)=>{
    if (req.user) {
        res.json({message:true,permissions:req.user.permissions,likedposts:req.user.likedposts,name:req.user.name,email:req.user.email});
    } else {
        res.json({
            message:false
        });
    }
})

module.exports = router;