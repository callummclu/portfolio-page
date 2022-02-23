import './Banner.css'
import {Link} from 'react-router-dom'

function Banner(){
	return (
		<div className="banner">
		<Link to="../../">
	      <div className="name-container">
	        <h1> Callum McLuskey </h1>
	      </div>
		</Link>
		</div>
		)	
}

export default Banner