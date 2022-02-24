import react from 'react'
import './IndexList.css'

export default function IndexList(props){
	return (
		<div className="index-list">
			<ul>
				<li>
					<a href="">App Description</a>
					<hr/>
					<ul>
						<li><a href="">Who is the site for</a></li>
						<li><a href="">Technologies Used</a></li>
					</ul>
				</li>
			<br/>

				<li>
					<a href="">Design methods</a>
					<hr/>
					<ul>
						<li><a href="">Figma Interactive Demo</a></li>
					</ul>
				</li>
			<br/>
	
				<li>
					<a href=""> Version Control </a>
					<hr/>
					<ul>
						<li><a href="">Github</a></li>
						<li><a href="">Running the git repo</a></li>
					</ul>
				</li>
			</ul>
		</div>
	)
}