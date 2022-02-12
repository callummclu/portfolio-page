import React from 'react'
import './Pbox.css'
import slugify from 'react-slugify';




function Ptag(props){
	const tag = props.tag
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
  const slugified_title = slugify(title)
  const slug_url = "../../portfolio/"+slugified_title
  return (
  		<>
  	<div className="parent-container">
    <div className="container">
    	<div className="img-container" style={{backgroundImage: `url(${img_url})`}}>
    	<div className="text-container">
	    		<div>
	    			<span>{title}</span>

	    			<span>
	    				<a href={slug_url}>more</a>
	    			</span>
	    			<div className="tags">
	    				<Ptags tags={tags} />
	    			</div>
	    		</div>
    		</div>
    	</div>
    	</div>
    </div>
    </>
  )
}

export default Pbox

export {Ptags,Ptag}