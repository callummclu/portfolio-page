import TextContainer from '../textContainer/TextContainer'
import './ImageContainer.css'

import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";

function getWindowDimensions(){
	const { innerWidth: width, innerHeight: height} = window
	return {
		width,
		height
	}
}

function ImageContainer(props){
	const image_arr = props.image_arr

	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())



	let scrl = useRef(null)
	const [scrollX, setScrollX] = useState(0)
	const [scrollEnd, setScrollEnd] = useState(false)

	const slide = (shift) => {
		scrl.current.scrollLeft += shift;
		setScrollX(scrollX + shift)

		if (
			Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth
		) {
			setScrollEnd(true)
		} else {
			setScrollEnd(false)
		}
	}

	const scrollCheck = () => {
		setScrollX(scrl.current.scrollLeft)
		if (
			Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth
		) {
			setScrollEnd(true)
		} else {
			setScrollEnd(false)
		}
	}

		useEffect(()=>{
		function handleResize(){
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize',handleResize)
		return () => window.removeEventListener('resize', handleResize)
	},[])


	let content = 
		<>
		<h1> Image's of Project </h1>
		<div className="image-container-field">
			<div ref={scrl} onScroll={scrollCheck} className="scrollable-view">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div>
			<div onClick={() => slide((-1 * windowDimensions.width*0.6))} className="image-control prev noselect">&lt;</div>
			<div onClick={() => slide(windowDimensions.width*0.6)} className="image-control next noselect">></div>
			</div>
		</div>

		</>
	return (
		<>
			<TextContainer content={content}/>
		</>
	)
}

export default ImageContainer