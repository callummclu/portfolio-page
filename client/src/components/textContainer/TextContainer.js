import './TextContainer.css'

function TextContainer(props){
	const width = props.width || "100%"
	const height = props.height || "auto"
	return (
		<div className="TextContainer" style={props.style || {width,height}}>
			{props.content}
		</div>
	)
}

export default TextContainer