import './ContactBox.css'

function ContactBox(props){
	if (props.isEmail === "true"){
		return(
			<div className="contact-container" >
				<div className="icon">
					<img src={props.icon} alt="logo"/>
				</div>
				<div onClick={() => {navigator.clipboard.writeText(props.text)}} className="text">
					<span>{props.text}</span>
				</div>
			</div>
		)		
	} else {
		return(
			<div className="contact-container">
				<div className="icon">
					<img src={props.icon} alt="logo"/>
				</div>
				<div className="text">{props.text}</div>
			</div>
		)
	}
}

export default ContactBox