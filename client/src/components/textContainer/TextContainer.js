import './TextContainer.css'

function TextContainer(props){
	const width = props.width || "100%"
	const height = props.height || "auto"
	const style = props.style || {width,height}
	const content = props.content
	return (
		<div className="TextContainer" style={style}>
			{content}
		</div>
	)
}

export default TextContainer