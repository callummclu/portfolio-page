const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


router.get('/', async (res,req)=>{
	try{
		res.status(200).json({})

	} catch(err){
		res.status(400).json({
			message: "error loading content"
		})
	}
})