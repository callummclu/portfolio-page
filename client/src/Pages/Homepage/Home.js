import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer'
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react'

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
    let recentProject_arr = []
    console.log(recentProject.length)
    for(let i = 0; i<recentProject.length; i++){
      if(i === 3){
        break
      } else {
        recentProject_arr.push(<ProjectContainer title={(recentProject[recentProject.length - (i+1)]).title} tags={(recentProject[recentProject.length - (i+1)]).tags} URL={'../../portfolio/' + (recentProject[recentProject.length - (i+1)]).slug_title} image={(recentProject[recentProject.length - (i+1)]).image}/>)
      }
    }
    const content_box = ( 
        <div className="recent-project-container">
            <div>
            <h1 className="heading-title"> Most Recent Project(s) </h1>
            </div>
            <div>{recentProject_arr}</div>
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
      <div>
      <TextContainer style={{width:"50%",height:"300px"}} content={        
        <div>
          <h1><span className="grayout"># </span>Welcome</h1>
          <blockquote style={{borderLeft:"0"}}>
            This is a small web app used to display all of my projects i have worked on as an aspiring full stack developer. I will be updating the site will all of the new projects I work on in the near future!
          </blockquote>
        </div>
      }/>
        <div className="button-container" >
          <div><Link to="../../portfolio"><button className="home">Portfolio</button></Link></div>
          <div><Link to="../../blog"><button className="home">Blog</button></Link></div>
        </div>
      </div>
      <br/><br/><br/><br/><br/>
      <RecentProjectContainer />
    </>
  )
  return <Container content={content} />
}

export default Home