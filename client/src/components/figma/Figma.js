import react from 'react'
import './Figma.css'

export default function Figma(props){
	const link = props.link

	return(
		<>
			<div className="link-display">
				<img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"/>
				<span>Figma</span>
				<span className="link">https://www.figma.com/file/9UUfzVU4Z7exCPlLbB6GGz/Untitled?node-id=0%3A1</span>
			</div>
			<div className="demo-display">
			 	<iframe scrolling="yes" seamless src="https://www.figma.com/proto/9UUfzVU4Z7exCPlLbB6GGz/Untitled?node-id=0%3A1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A2" title="W3Schools Free Online Web Tutorials"></iframe>
			</div>
		</>
	)
}