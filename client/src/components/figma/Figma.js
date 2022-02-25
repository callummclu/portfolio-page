import react from 'react'
import './Figma.css'

export default function LinkBox(props){
	const link = props.link
	const title = props.title
	let logo = ""
	try {
		if (title === "Figma"){
			logo = <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"/>
		} else if (title === "Github"){
			logo = <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
		} else {
			if(props.logo !== "undefined"){
				logo = props.logo
			} else {
				logo = ""
			}
			
		}
	} catch (err){
		logo = ""
	}
	return(
		<>
			<div className="link-display">
				{logo}
				<span>{title}</span>
				<span className="link"><a href={link}>here</a></span>
			</div>
		</>
	)
}