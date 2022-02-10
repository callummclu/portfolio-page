import React from 'react'
import Pbox from '../PortfolioItem/Pbox'
import './Pgrid.css'
import Textsection from '../TextSection/Textsection'




function PgridItems(props) {

	const pItems = props.boxArray

	let pGrid = []
	for (let i = 0;i<pItems.length;i++) {
		pGrid.push(<Pbox title={pItems[i].title}
										 tags={pItems[i].tags}
										 image={pItems[i].image}
										 content={pItems[i].content}
										 page={pItems[i].page}
										 />)
	}

  return pGrid;
}

function Pgrid(props){
	return(
		<>

		<div className="content-container">
			<div className="grid-container">
				<PgridItems boxArray={props.boxArray} />
			</div>
		</div>
		</>
	)
}

export default Pgrid