import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


import Container from '../../components/container/Container'

function PortfolioItem(props){

  const [project ,setProject] = useState([])
  const { id } = useParams();


  useEffect(()=>{
   let fetchLink = `http://localhost:3001/portfolio/${id}`
    fetch(fetchLink)
      .then((response) => response.json())
      .then((responseJson) => {
        setProject(responseJson.data);
      })
    },[])

  const content = (
    <>
    <h5>title</h5> <p>{project.title}</p>
    <h5>slug_title</h5> <p>{project.slug_title}</p>
    </>
  )
  return <Container content={content} />
}

export default PortfolioItem;