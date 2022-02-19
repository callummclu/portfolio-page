const express = require('express')
const mongoose = require('mongoose')


var Schema = mongoose.Schema;

var project = new Schema({
	slug_title: String,
	title: String,
	tags: [String],
	image: String,
	content: String,
	github: String,
	additionalImages: [String],
	p_date: Date
});


module.exports = new mongoose.model('project', project)