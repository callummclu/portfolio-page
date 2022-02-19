const express = require('express')
const router = express.Router()

const projectModel = require('../Models/project')

let projects = require('../dummyDatabase')
/*
router.get('/', async (req, res)=>{
	try {
		res.status(200).json({
			data:projects
		});
	} catch (err){
		res.status(400).json({
			message: "an error occured",
			err
		});
	}
});
*/

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

router.get('/:id', async (req,res)=>{

	let { id } = req.params;
	let project_db = projectModel.find({slug_title, `${id}`}, (err,projects_db)=>{
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
	/*
	try {
		let project = projects.find(project => project.slug_title === id)
		res.status(200).json({
			data: project
		});
	} catch (err) {
		res.status(400).json({
			message: "an error occured",
			err
		})
	}
	*/
})

module.exports = router;