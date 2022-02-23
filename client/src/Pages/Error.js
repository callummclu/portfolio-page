import React, { useState, useEffect } from 'react'

import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'

export default function Error(props){
	const errortype = props.type
	return(
		<Container content={<TextContainer content={<><h1>{errortype}</h1><p></p></>}/>}/>
	)
}
