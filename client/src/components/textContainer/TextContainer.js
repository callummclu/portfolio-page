import './TextContainer.css'

function TextContainer(props){
	const width = props.width || "100%"
	const height = props.height || "auto"
	const containerStyling = {width,height}
	const content = props.content
	return (
		<div className="TextContainer" style={containerStyling}>
			{content}
		</div>
	)
}

export default TextContainer