import './ProjectContainer.css'
import {Link} from 'react-router-dom'


function ProjectContainer(props){
	const title = props.title
	const tags = props.tags

	let tagsList = []
  for (let j = 0; j<tags.length; j++){
    tagsList.push(<span className="tag">{tags[j]}</span>)
  }

  let new_title = []
	if (title.length > 22){
	 	for (let i=0;i<22;i++){
			new_title.push(title[i])
 		}
  	new_title.push("...")
  } else {
   	new_title = title
  }

	return (
		<>
			<Link to={props.URL}>
				<div className="ProjectContainer">
					<div className="image" style={{ background:`url(${props.image})` }}></div>
					<div className="text">		
						<p>
							<span className="title">{new_title}</span>
						</p>
						<p>{tagsList}</p>
					</div>
				</div>
			</Link>
		</>
	)
}

export default ProjectContainer