const express = require('express')
const mongoose = require('mongoose')

var project = new mongoose.Schema({
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
	figma : String,
	github : String,
	index_summary: String,
	activity: {
		type: String,
		default: 0
	}
});


module.exports = new mongoose.model('project', project)