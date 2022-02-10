import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route, 
  Link,
  useParams
} from "react-router-dom";
import '../PortfolioItem/Pbox.css'
import './Popup.css'
import {Ptags, Ptag} from '../PortfolioItem/Pbox'
import Textsection from '../TextSection/Textsection'
import gridItems from '../gridItems'


function findID(ID){
  for (let i = 0; i<=gridItems.length-1;i++){
    if(gridItems[i].slug_title == ID){
      return gridItems[i]
    }
  }
}


function Popup() {
  let id = useParams();
  let Item = findID(id.id)
  const tags= Item.tags.split(',')
  const title= Item.title 
  const content =  Item.content 
  const page =  Item.page
  const titleStyling = {textAlign:"center"}

  const otherPosts = <div className="display-container"><div className="box"></div><div className="box"></div><div className="box"></div><div className="box"></div><div className="box"></div></div>

  return (
  		<div className="popup">
        <div style={titleStyling}>
          <Textsection title=<h1>{title}</h1> />
        </div>
        <div className="tags" style={{textAlign: "center"}}>
         <Ptags tags={tags}  />
        </div>
        <br/><br/><br/>
        <Textsection content={content} />
        <Textsection title=<h3>other projects</h3> content={otherPosts} />
        <br/><br/><br/>

      </div>
  )
}

export default Popup