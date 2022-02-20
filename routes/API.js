const express = require('express')
const router = express.Router()

const projectModel = require('../Models/project')

// get all
router.get('/', async (req,res)=>{
	
	try {
		const projects_db = await projectModel.find()
			res.status(200).json({
				data:projects_db
			})
		
	} catch (err){
		res.status(500).json({
			message: "an error occured",
			err
		});
	}
})

// create one
router.post('/create', async (req,res) => {
	const project = new projectModel({
		slug_title: req.body.slug_title,
		title: req.body.title
	})
	try {
		const newProject = await project.save()
		res.status(201).json(newProject)
	} catch (err) {
		res.status(400).json({
			message: "an error occured",
			err
		})
	}
})

//delete one
router.delete('/:id', getProject, async (req,res)=>{
	try {
		await res.project.remove()
		res.json({ message: "deleted project"})
	} catch (err) {
		res.status(500).json({
			message:
			err.message
		})
	}
})

// edit one 
router.patch('/:id', getProject, async (req,res)=>{
	if (req.body.title != null) {
		res.project.title = req.body.title
	}
	if (req.body.slug_title != null) {
		res.project.slug_title = req.body.slug_title
	}
	try {
		const updatedProject = await res.project.save()
		res.json(updatedProject)
	} catch (err) {
		res.status(400).json({message: err.message})
	}

})

// get one
router.get('/:id', getProject, (req,res)=>{
	res.json(res.project)
})

async function getProject(req,res,next){
	let project
	try {
		project = await projectModel.find({slug_title: req.params.id})
		if(project == null) {
			return res.status(404).json({message:"cannot find project"})
		}
	} catch (err) {
		return res.status(500).json({message:err.message})
	}

	res.project = project
	next()
}

module.exports = router;