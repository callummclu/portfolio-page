import './Banner.css'
import {Link} from 'react-router-dom'

function Banner(props){
	return (
		<div className="banner">
			<Link to="../../">
		        <div className="name-container">
		       		<h1 style={props.style}> Callum McLuskey </h1>
		        </div>
			</Link>
		</div>
	)	
}

export default Banner