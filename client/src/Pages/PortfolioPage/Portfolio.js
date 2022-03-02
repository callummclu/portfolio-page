import React, { useState, useEffect } from 'react'
import Container from '../../components/container/Container'
import './PortfolioPage.css'
import TextContainer from '../../components/textContainer/TextContainer'
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer'
import Banner from '../../components/Banner/Banner'

function PortfolioList(props){

  const [projects, setProjects] = useState({})
  useEffect(() => {
    fetch(`/API`)
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
  return  projects.length ? <div>{list}</div> : <p> no content to load</p>
}

function Portfolio(props){

  const auth = props.auth
  let breadcrumbs = (window.location.href).split('/').splice(1).splice(1).splice(1)
  breadcrumbs.unshift('home')

  let breadcrumbs_arr = []
  let breadcrumbs_link = ""
  for (let i = 0; i<breadcrumbs.length;i++){
    breadcrumbs_link = "../../../../../"
    for(let j = 0; j<i; j++){
      breadcrumbs_link += breadcrumbs[j+1]+'/'
      
    }
    breadcrumbs_arr.push(<a className="breadcrumb" href={breadcrumbs_link}>{breadcrumbs[i]}</a>)
  }
  const content = (
    <div className="portfolio-page">
      <Banner />
      {breadcrumbs_arr}
          
      <TextContainer content={
        <>
          <h1> portfolio {auth ? <span><a href="portfolio/create"><div className="change-box create"><button>post</button></div></a></span> : <span></span>}</h1>
          <p>Here are some projects i've been working on over the past few months.<br/><br/> These posts will go into depth of technology choices aswell as show off the current state of the projects.<br/></p>
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