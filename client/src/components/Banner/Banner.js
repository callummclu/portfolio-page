import './Banner.css'
import {Link} from 'react-router-dom'

function Banner(props){
	return (
		<div className="banner">
			<Link to="../../">
		        <div className="name-container">
		       		<h1 className="banner-text" style={props.style}> Callum McLuskey </h1>
		       		<p className="banner-text">
		       			Software Developer | Guitarguitar
		       		</p>

		        </div>
			</Link>
		</div>
	)	
}

export default Banner