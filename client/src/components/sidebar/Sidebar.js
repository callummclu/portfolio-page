import React, { useState } from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

function Sidebar(props){
	const [toggle,toggleSidebar] = useState(true)
	const show = "sidebar " + props.show
	const hide = "sidebar " + !(props.show)
	const auth = props.auth || false
	return(
		<div className={toggle ? show : hide}>
			<Link to="/" onClick={() => toggleSidebar(!toggle)}>Home</Link>
			<br/><br/>
			<Link to="portfolio" onClick={() => toggleSidebar(!toggle)}>Portfolio</Link>
			<br/><br/>
			<Link to="contact" onClick={() => toggleSidebar(!toggle)}>Contact</Link>
			<br/><br/>
			{auth ? <a href="../../../API/account/logout">logout</a>:<a href="../../../login">login</a>}
		</div>
	)
}

export default Sidebar