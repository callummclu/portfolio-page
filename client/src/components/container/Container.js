import "./Container.css"

function Container(props){
	return(
		<div style={props.style} className="container main">
			<div style={props.divstyle}>{props.content}</div>
		</div>
	)
}

export default Container