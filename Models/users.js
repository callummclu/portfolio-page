const express = require('express')
const mongoose = require('mongoose')

const UserSchema  = new mongoose.Schema({
  		name :{
      		type  : String,
      		required : true
		} ,
		email :{
			type  : String,
			required : true
		} ,
		password :{
	    	type  : String,
	    	required : true
		} ,
		date :{
	    	type : Date,
	    	default : Date.now
		},
		permissions :{
			type: String,
			default: 1
		},
		likedposts : {
			type: [String],
			default: []
		},
		likedBlogposts : {
			type: [String],
			default: []			
		}

});
const User= mongoose.model('User',UserSchema);

module.exports = User;