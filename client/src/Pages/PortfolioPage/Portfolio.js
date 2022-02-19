import React, { useState, useEffect } from 'react'
import Container from '../../components/container/Container'
import './PortfolioPage.css'
import TextContainer from '../../components/textContainer/TextContainer'
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer'
import LoadingIcon from '../../components/LoadingCircle/LoadingIcon'
import Banner from '../../components/Banner/Banner'

function PortfolioList(props){

  const [projects, setProjects] = useState({})
  useEffect(() => {
    fetch("http://localhost:3000/portfolio")
      .then((response) => response.json())
      .then((responseJson) => {
        setProjects(responseJson.data)
      })
  }, [])

  let list = []
  for (let i = 0;i<projects.length;i++){
    const image = projects[i].image
    // link vars
    let projectname = projects[i].slug_title
    let link = '../../portfolio/' + projectname

    list.push(
      <>
        <ProjectContainer  title={projects[i].title} tags={projects[i].tags} URL={link} image={image}/>
      </>)
  }

  return  projects.length ? <div>{list}</div> : <LoadingIcon />
  
}

function Portfolio(props){

  const content = (
    <div className="portfolio-page">
      <Banner />
      <TextContainer content={
        <>
        
        <h1> portfolio </h1>
        <p>Here are some of the portfolio Pieces I have made over the past few months</p>
        </>
      }/>
      <br/><br/>
      <div className="PortfolioListContainer">
        <PortfolioList />
      </div>
    </div>
  )
  return <Container content={content} />
}

export default Portfolio;