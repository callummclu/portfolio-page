import React, { useState, useEffect } from 'react'

import Container from '../../components/container/Container'

function PortfolioList(props){

  const [projects, setProjects] = useState({})

  useEffect(() => {
    fetch("http://localhost:3001/portfolio")
      .then((response) => response.json())
      .then((responseJson) => {
        setProjects(responseJson.data)
      })
  }, [])

  let list = []
  for (let i = 0;i<projects.length;i++){
    let projectname = projects[i].slug_title
    let link = '../../portfolio/' + projectname
    list.push(<><a href={link}>{projects[i].title}</a><hr/></>)
  }

  return (
    <div>
      {list}
    </div>
  )
}

function Portfolio(props){

  const content = (
    <>
      <h1> portfolio </h1>
      <PortfolioList />
    </>

    // https://www.techomoro.com/how-to-create-a-react-frontend-express-backend-and-connect-them-together/
    // USE THIS FOR GETTING INFORMATION FROM HOOKS
  )
  return <Container content={content} />
}

export default Portfolio;