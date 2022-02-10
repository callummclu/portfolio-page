import React from 'react'
import './Textsection.css'

function Textsection(props) {
  const content = props.content || <p></p>
  const title = props.title || <h1></h1>

  return (
      
      <div className="text-section"> 
        {title}{content}
      </div>
  )
}

export default Textsection