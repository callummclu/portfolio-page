const express = require('express')
const router = express.Router()
/*
const projectModel = require('../Models/project')
*/

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

/*
router.post('/', (req,res,next) => {
	var obj = {
		slug_title: req.body.slug_title,
		title: req.body.title,
		tags: req.body.tags,
		image: req.body.image,
		content: req.body.content,
		github: req.body.github,
		additionalImages: req.body.additionalImages,
		p_date: req.body.p_date
	}
	projectModel.create(obj, (err, item) => {
		if (err) {
			console.log(err)
		}
		else {
			res.redirect('/')
		}
	})
})
*/

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