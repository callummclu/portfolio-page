const express = require('express')
const router = express.Router()

let projects = require('../dummyDatabase')

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

router.get('/:id', async (req,res)=>{
	let { id } = req.params;
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
})

module.exports = router;