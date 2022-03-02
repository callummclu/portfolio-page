const express = require('express')
const router = express.Router()
var slugify = require('slugify')

const blogModel = require('../Models/blogPost')

/* REST API */

// GET ALL POSTS
router.get('/', async (req,res)=>{
	try {
		const projects_db = await blogModel.find()
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
// GET ONE POST
router.get('/:id',getBlog, async (req,res)=>{
	res.status(200).json(res.blogPost)
})
// CREATE ONE POST
router.post('/create', async (req,res) => {
	const blog = new blogModel({
		title: req.body.title,
		slug_title: slugify(req.body.title),
		tags: req.body.tags,
		image: req.body.image,
		content: req.body.content,
		likes: 0,
		index_summary: req.body.index_summary,
		author: req.user.name
	})
	try {
		const newBlogPost = await blog.save()
		res.redirect('../../../blog')
	} catch (err) {
		res.status(400).json({
			message: "an error occured",
			err
		})
	}
})

// EDIT ONE POST
router.patch('/:id', getBlog, async (req,res)=>{
	if(req.user.permissions === "2"){
		try {
			res.blogPost.data.title = req.body.title
			res.blogPost.data.slug_title = slugify(req.body.title)
	   		res.blogPost.data.image = req.body.image   
			res.blogPost.data.content = req.body.content
			res.blogPost.data.index_summary = req.body.index_summary
			res.blogPost.data.author = req.user.name

			await res.blogPost.data.save()
			res.redirect(`/blog/${res.blogPost.data.slug_title}`)
		} catch (err) {
			res.status(400).json({message: err.message})
		}
	} else {
		res.status(403).json({
			message: "an error occured",
			err
		})

	}
})
// DELETE ONE POST
router.delete('/:id', getBlog, async (req,res)=>{
	if(req.user.permissions === "2"){

		try {
			await res.blogPost.data.remove()
			res.redirect('../../../blog')
		} catch (err) {
			res.status(500).json({
				message:
				err.message
			})
		}
	} else {
		res.status(403).json({
			message: "an error occured",
			err
		})		
	}
})

async function getBlog(req,res,next){
	let blogPost
	try {
		blogPost = await blogModel.find({slug_title: req.params.id})
		blogPost = {data: blogPost[0]}
		if(blogPost == null) {
			return res.status(404).json({message:"cannot find blogPost"})
		}
	} catch (err) {
		return res.status(500).json({message:err.message})
	}

	res.blogPost = blogPost
	next()
}

module.exports = router;