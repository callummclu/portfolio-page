import './ContactBox.css'

function ContactBox(props){
	const icon = props.icon
	const text = props.text

	if (props.isEmail == "true"){
		return(
			<div className="contact-container" >
				<div className="icon">
					<img src={icon}/>
				</div>
				<div onClick={() => {navigator.clipboard.writeText(text)}}
 className="text"><span>{text}</span></div>
			</div>
		)		
	} else {

		return(
			<div className="contact-container">
				<div className="icon">
					<img src={icon}/>
				</div>
				<div className="text">{text}</div>
			</div>
		)
	}
}

export default ContactBox