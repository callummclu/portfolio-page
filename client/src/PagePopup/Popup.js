import React from 'react'
import '../PortfolioItem/Pbox.css'
import './Popup.css'
import {Ptags, Ptag} from '../PortfolioItem/Pbox'
import Textsection from '../TextSection/Textsection'
import gridItems from '../index'



function Popup(props) {
  const tags=props.tags 
  const title=props.title
  const content = props.content

  return (
  		<div className="popup">
        <Textsection heading={title} content={content} />
        <div className="tags">
         <h5>TAGS</h5>
         <Ptags tags={tags} />
        </div>

      </div>
  )
}

export default Popup