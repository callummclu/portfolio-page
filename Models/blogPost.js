const express = require('express')
const mongoose = require('mongoose')

var blogPost = new mongoose.Schema({
	slug_title: {
		type:String,
		required: true
	},
	title: String,
	tags: [String],
	image: String,
	content: String,
	likes :{
		type: String,
		default: 0
	},
	index_summary: String,
});


module.exports = new mongoose.model('blogPost', blogPost)