import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import LoadingIcon from '../../components/LoadingCircle/LoadingIcon'


import './Home.css'

function RecentProjectContainer(){

  const [recentProject, setRecentProject] = useState([])

  useEffect(()=>{
    fetch("http://192.168.0.10:3001/portfolio")
      .then((response) => response.json())
      .then((responseJson) => {
        setRecentProject(responseJson.data)
      })
  },[])

  try{
  const mostRecentProject = recentProject[2]
  const link = '../../portfolio/' + mostRecentProject.slug_title


  const content_box = ( 
      <div className="recent-project-container" style={{backgroundImage:`url(${mostRecentProject.image})`}}>
          <div>
            <h3> {mostRecentProject.title }<span> <a href={link}>View Here</a></span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus nisi nunc, eget vehicula magna tincidunt ut. Fusce eu dolor quis dui aliquam facilisis. Phasellus non finibus odio, ac maximus leo. Donec pretium arcu ac ante ornare, non vestibulum magna venenatis. Proin mollis vestibulum diam rhoncus dictum. Nam at lacus nulla. Morbi sed commodo nunc, et ultricies eros. Donec sit amet efficitur orci, ut vehicula quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ac egestas mauris, in convallis velit. Nulla feugiat diam sed nulla pellentesque ultricies. Pellentesque scelerisque turpis a nibh iaculis convallis.</p>
          </div>
      </div> 
      )

    return content_box
  }
  catch(e){
    return <h1>Error loading most recent project</h1>
  }
}


function Home(){

  const content = (
    <>
      <Banner />
      <TextContainer width="50%"  height="200px" content={
        <>

          <h1>Welcome</h1>
          <p>This is a small web app used to display all of my projects i have works on as an aspiring full stack developer</p>
        </>
      }/>
      <div className="button-container">
        <Link to="../../portfolio"><button>Portfolio</button></Link>
        <Link to="../../contact"><button>Contact</button></Link>
      </div>

      <h2 className="heading-title"> My Most Recent Project </h2>
        <RecentProjectContainer />
       
    </>
  )
  return <Container content={content} />
}

export default Home