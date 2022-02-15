import './ProjectContainer.css'
import {Link} from 'react-router-dom'


function ProjectContainer(props){
	const title = props.title
	const tags = props.tags
	const URL = props.URL
	const image = props.image

	let tagsList = []
    for (let j = 0; j<tags.length; j++){
      tagsList.push(<span className="tag">{tags[j]}</span>)
    }

	return (
		<>
		<Link to={URL}>
		<div className="ProjectContainer">
			<div className="image" style={{ background:`url(${image})` }}></div>
		<div className="text">		
			<p><span className="title">{title}</span></p>
			<p>{tagsList}</p>
		</div>

		</div>

		</Link>

		</>
	)
}

export default ProjectContainer