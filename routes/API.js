const express = require('express')
const router = express.Router()
var slugify = require('slugify')

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
		title: req.body.title,
		slug_title: slugify(req.body.title),
		tags: req.body.tags,
		image: req.body.image,
		content: req.body.content,
		github: req.body.github,
		additionalImages: req.body.additionalImages
	})
	try {
		const newProject = await project.save()
		res.redirect('../Portfolio')
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
		await res.project.data.remove()
		res.redirect('../Portfolio')
	} catch (err) {
		res.status(500).json({
			message:
			err.message
		})
	}
})

// edit one 
router.patch('/:id/edit', getProject, async (req,res)=>{
	if (req.body.title != null) {
		res.project.data.title = req.body.title
		res.project.data.slug_title = slugify(res.project.title)
	}
	if (req.body.tags != null) {
		// tags array
		res.project.data.tags = ['tag1','tag2']
	}
    if (req.body.image != null) {
    	res.project.data.image = req.body.image
    }
    if (req.body.content != null) {
    	res.project.data.content = req.body.content
    }
    if (req.body.github != null) {
    	res.project.data.github = req.body.github
    }
	if (req.body.additionalImages != null) {
		res.project.data.additionalImages = ['#','#']
	}

	try {
		const updatedProject = await res.project.data.save()
		res.redirect('../Portfolio')
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
		project = {data: project[0]}
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