import react from 'react'
import './IndexList.css'

export default function IndexList(props){
	const content = props.content || (<></>)
	return (
		<div className="index-list">
		{content}
		</div>
	)		
}