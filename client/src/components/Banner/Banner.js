import './Banner.css'
import {Link} from 'react-router-dom'

function Banner(props){
	return (
		<div className="banner">
			<Link to="../../">
		        <div className="name-container">
		       		<h1 className="banner-text" style={props.style}> Callum McLuskey </h1>
		       		<p className="banner-text">Intern Full Stack Engineer <span style={{fontSize:"10px"}}>@</span> Evata</p>

		        </div>
			</Link>
		</div>
	)	
}

export default Banner