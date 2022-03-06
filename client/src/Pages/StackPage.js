import React, { useState, useEffect } from 'react'
import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'
import Banner from '../components/Banner/Banner'

export default function StackPage(){
	let breadcrumbs = (window.location.href).split('/').splice(1).splice(1).splice(1)
	breadcrumbs.unshift('home')

	let breadcrumbs_arr = []
	let breadcrumbs_link = ""
	for (let i = 0; i<breadcrumbs.length;i++){
		breadcrumbs_link = "../../../../../"
		for(let j = 0; j<i; j++){
	  		breadcrumbs_link += breadcrumbs[j+1]+'/'
		}
		breadcrumbs_arr.push(<a className="breadcrumb" href={breadcrumbs_link}>{breadcrumbs[i]}</a>)
	}
	return (
		<>
			<Container style={{minHeight:"100vh"}} content={
				<>
			      	<Banner />
      				{breadcrumbs_arr}

					<TextContainer content={
						<>
						<h1> Technologies </h1>
						<p>Here is a short list of all technologies I feel confident to work with.</p>
						</>
					}/>
					<br/><br/><br/><br/>
					<div className="tags">
						<div><span>Python</span></div>
						<div><span>Numpy</span></div>
						<div><span>Scipy</span></div>
						<div><span>Pandas</span></div>
						<div><span>Django</span></div>
						<div><span>Flask</span></div>
						<div><span>Javascript</span></div>
						<div><span>TypeScript</span></div>
						<div><span>NodeJS</span></div>
						<div><span>ExpressJS</span></div>
						<div><span>ReactJS</span></div>
						<div><span>Git</span></div>
						<div><span>Github</span></div>
						<div><span>GitLab</span></div>
						<div><span>Java</span></div>
						<div><span>C</span></div>
						<div><span>C++</span></div>
						<div><span>swift</span></div>
						<div><span>MongoDB</span></div>
						<div><span>SQL</span></div>
						<div><span>NoSQL</span></div>
						<div><span>HTML</span></div>
						<div><span>CSS</span></div>
						<div><span>SCSS/SASS</span></div>
					</div>
										<br/><br/><br/><br/>

				</>
			}/>
		</>
	)
}