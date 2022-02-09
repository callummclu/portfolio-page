import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nav from './Navbar/Nav'
import Pgrid from './PortfolioDisplayGrid/Pgrid'
import Textsection from './TextSection/Textsection'

ReactDOM.render(
  <>
    <Nav />
  </>  
  ,
  document.getElementById('Nav-bar')
);


const gridItems = [{
  title: "Piercing Portfolio",
  tags: "Django,Python,SQLite3",
  image: "https://i.imgur.com/O64lJel.png"
},
{
  title:"Copyright History Archive Page",
  tags: "Laravel,PHP,React,NodeJS,?DB?",
  image:"https://i.imgur.com/Td3go8j.png",
},
{
  title:"iOS icon resizers",
  tags:"Python",
  image:"https://i.imgur.com/YVuhWXj.png"
},
{
  title:"Image of the Day",
  tags:"Django,Python,SQLite3",
  image:"https://i.imgur.com/p37COe5.png"
},
{
  title:"Crochet Template",
  tags:"Swift",
  image:'https://i.imgur.com/wTHW5uQ.png'
},
{
  title:"My Portfolio Site",
  tags:"React,NodeJs,expressJS",
  image:"https://i.imgur.com/tLM997k.png"
}
]

ReactDOM.render(
  <>
    <Textsection heading="Welcome" 
                 content="Hi, im Callum. Im currently a 3rd year student studying at the university of glasgow here are a few of my past and current projects."/>
   <Pgrid boxArray={gridItems}/>
  </>,

  document.getElementById('root')
);