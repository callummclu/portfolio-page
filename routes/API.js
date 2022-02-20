const express = require('express')
const router = express.Router()

const projectModel = require('../Models/project')

let projects = require('../dummyDatabase')

router.get('/', (req,res)=>{
	let projects_db = projectModel.find({}, (err,projects_db)=>{
		try {
			res.status(200).json({
				data:projects_db
			});
		} catch (err){
			res.status(400).json({
				message: "an error occured",
				err
			});
		}
	})
})

/*
	POST ROUTE
*/

/*
	DELETE ROUTE
*/

router.get('/:id', (req,res)=>{

	let { id } = req.params;

	// ERROR ON LINE 42 FIX THIS
	let project_db = projectModel.find({slug_title, id}).toArray(()=>{
		try {
			res.status(200).json({
				data:project_db
			});
		} catch (err){
			res.status(400).json({
				message: "an error occured",
				err
			});
		}
	})
})

module.exports = router;