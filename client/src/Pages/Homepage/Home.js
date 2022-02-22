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
    fetch(`/API`)
      .then((response) => response.json())
      .then((responseJson) => {
        setRecentProject(responseJson.data)
      })
  },[])

  try{
  const mostRecentProject = recentProject[recentProject.length - 1]
  const link = '../../portfolio/' + mostRecentProject.slug_title


  const content_box = ( 
      <div className="recent-project-container" style={{backgroundImage:`url(${mostRecentProject.image})`}}>
          <div>
            <h3> {mostRecentProject.title }<span> <a href={link}>View Here</a></span></h3>
            <p>{mostRecentProject.content}</p>
          </div>
      </div> 
      )

    return content_box
  }
  catch(e){
    return <p> error loading content </p>
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
        <Link to="../../portfolio"><button className="home">Portfolio</button></Link>
        <Link to="../../contact"><button className="home">Contact</button></Link>
      </div>

      <h2 className="heading-title"> My Most Recent Project </h2>
        <RecentProjectContainer />
       
    </>
  )
  return <Container content={content} />
}

export default Home