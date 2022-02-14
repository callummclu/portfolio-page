import React, { useState } from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

function Sidebar(props){
	const show = "sidebar " + props.show
	const hide = "sidebar " + !(props.show)
	const [toggle,toggleSidebar] = useState(true)
	return(
		<div className={toggle ? show : hide}>
			<Link to="/" onClick={() => toggleSidebar(!toggle)}>Home</Link>
			<br/><br/>
			<Link to="portfolio" onClick={() => toggleSidebar(!toggle)}>Portfolio</Link>
			<br/><br/>
			<Link to="contact" onClick={() => toggleSidebar(!toggle)}>Contact</Link>
		</div>
	)
}

export default Sidebar