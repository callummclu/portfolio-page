import React from 'react'
import './Textsection.css'

function Textsection(props) {
  const Heading = props.heading
  const para = props.content

  return (
    <div className="text-section">
      <h3>{Heading}</h3>
      <p>{para}</p>

    </div>
  )
}

export default Textsection