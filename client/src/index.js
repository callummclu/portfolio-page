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
  image: "https://i.imgur.com/O64lJel.png",
  content: <>
            <p>This is a small web app created to show off the progression of a to be training piercer.</p>
            <br />
            <p>This site aims to allow for easy upload of the required images and details of a given piercing to showcase how it was approached and show off the end result.</p>
          </>,
          github:"https://github.com/callummclu/Jewellery-Portfolio",
          additionalImages:[],
          
},
{
  title:"Copyright History Archive Page",
  tags: "Laravel,PHP,React,NodeJS,?DB?",
  image:"https://i.imgur.com/Td3go8j.png",
  content:<></>,
  github:"",
  additionalImages:[],
  
},
{
  title:"iOS icon resizers",
  tags:"Python",
  image:"https://i.imgur.com/YVuhWXj.png",
  content:<></>,
  github:"",
  additionalImages:[],
  
},
{
  title:"Image of the Day",
  tags:"Django,Python,SQLite3",
  image:"https://i.imgur.com/p37COe5.png",
  content:<></>,
  github:"",
  additionalImages:[],
  
},
{
  title:"Crochet Template",
  tags:"Swift",
  image:'https://i.imgur.com/wTHW5uQ.png',
  content:<></>,
  github:"",
  additionalImages:[],
  
},
{
  title:"My Portfolio Site",
  tags:"React,NodeJs,expressJS",
  image:"https://i.imgur.com/tLM997k.png",
  content:<></>,
  github:"",
  additionalImages:[],
  
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

export default gridItems