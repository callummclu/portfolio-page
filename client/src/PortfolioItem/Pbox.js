import React from 'react'
import './Pbox.css'
import ReactDOM from 'react-dom'
import Popup from '../PagePopup/Popup'


function Ptag(props){
	const tag = props.tag
	const key = {tag}
	return(
		<div>
			<span>
				{tag}
			</span>
		</div>
	)
}

function Ptags(props){
	const tags = props.tags
	let totalTags = []
	for (let i = 0; i<tags.length;i++) {
			totalTags.push(<Ptag tag={tags[i]} />)
		}
	return totalTags
}


function Pbox(props) {
	const tags = (props.tags).split(",")
	const title = props.title
	const img_url = props.image
	const content = props.content
  const [show,toggleShow] = React.useState(true);

  return (
  	<>
  	<div className="parent-container">
    <div className="container">
    	<div className="img-container" style={{backgroundImage: `url(${img_url})`}}>
    	<div className="text-container">
	    		<div>
	    			<span>{title}</span>
	    			<span><button onClick={()=>toggleShow(!show)}>more</button></span>
	    			<div className="tags">
	    				<Ptags tags={tags} />
	    			</div>
	    		</div>
    		</div>
    	</div>
    	</div>
    </div>
    {!show && <><Popup tags={tags} title={title} content={content}/><button onClick={()=>toggleShow(!show)}>close</button></>}

    </>
  )
}

export default Pbox

export {Ptags,Ptag}