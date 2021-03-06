const express = require('express')
const router = express.Router()
var slugify = require('slugify')
const accountRouter = require('./account')
const blogRouter = require('./blog')
const User = require("../Models/users.js")

// includes account route file.
router.use('/account',accountRouter)
router.use('/blog',blogRouter)

const projectModel = require('../Models/project')


// get all post
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

// get one post
router.get('/:id', getProject, (req,res)=>{
	res.json(res.project)
})

// create one post
router.post('/create', async (req,res) => {
	const project = new projectModel({
		title: req.body.title,
		slug_title: slugify(req.body.title),
		tags: req.body.tags,
		image: req.body.image,
		content: req.body.content,
		likes: 0,
		github: req.body.github,
		figma: req.body.figma,
		index_summary: req.body.index_summary,
		activity: req.body.activity,

	})
	if(req.user.permissions === "2"){

		try {
			const newProject = await project.save()
			res.redirect('../portfolio')
		} catch (err) {
			res.status(400).json({
				message: "an error occured",
				err
			})
		}
	} else {
		res.status(403).json({
				message:
				err.message
			})
	}
})

//delete one post
router.delete('/:id', getProject, async (req,res)=>{
	if(req.user.permissions === "2"){
		try {
			await res.project.data.remove()
			res.redirect('../portfolio')
		} catch (err) {
			res.status(500).json({
				message:
				err.message
			})
		}
	} else {
		res.status(403).json({
				message:
				err.message
			})
	}
})

// edit one post
router.patch('/:id', getProject, async (req,res)=>{
	if(req.user.permissions === "2"){
		try {
			res.project.data.title = req.body.title
			res.project.data.slug_title = slugify(req.body.title)
	   		res.project.data.image = req.body.image   
			res.project.data.content = req.body.content
			res.project.data.github = req.body.github
			res.project.data.figma = req.body.figma
			res.project.data.index_summary = req.body.index_summary
			res.project.data.activity = req.body.activity


			await res.project.data.save()
			res.redirect(`/portfolio/${req.params.id}`)
		} catch (err) {
			res.status(400).json({message: err.message})
		}
	} else {
		res.status(403).json({
				message:
				err.message
			})
	}
})

// like one post
router.patch('/like/:id',getProject, async (req,res)=>{
	try{
		if(req.user){
			if(req.user.likedposts.includes(req.params.id)){
				(req.user.likedposts).splice((req.user.likedposts).indexOf(req.params.id),1)
				await req.user.save()
				res.project.data.likes--
				await res.project.data.save()
				res.redirect(`/portfolio/${req.params.id}`)
			} else {
				req.user.likedposts.push(req.params.id)
				await req.user.save()
				res.project.data.likes++
				await res.project.data.save()
				res.redirect(`/portfolio/${req.params.id}`)					
			}
		} else {
			res.redirect(`/login`)	
		}

	} catch (err){
		res.status(400).json({message: err.message})		
	}
})

// gets project from id (for use in :id routes)
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