const express = require('express')
const mongoose = require('mongoose')


var Schema = mongoose.Schema;

var project = new Schema({
	slug_title: String,
	title: String,
	tags: [String],
	image: String,
	content: String,
	description: String,
	likes :{
		type: String,
		default: 0
	}
});


module.exports = new mongoose.model('project', project)