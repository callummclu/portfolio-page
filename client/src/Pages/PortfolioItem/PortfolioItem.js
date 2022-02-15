import React, { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";
import './PortfolioItem.css'

import Container from '../../components/container/Container'
import LoadingIcon from '../../components/LoadingCircle/LoadingIcon'

function PortfolioItem(props){

  const [project ,setProject] = useState([])
  const { id } = useParams();

  console.log(project.title)

  useEffect(()=>{
   let fetchLink = `http://192.168.0.10:3001/portfolio/${id}`
    fetch(fetchLink)
      .then((response) => response.json())
      .then((responseJson) => {
        setProject(responseJson.data);
      })
    },[id])

  console.log(project.title)

  const content = (
    
    <>
    <h5>title</h5> <p>{project.title}</p>
    <h5>slug_title</h5> <p>{project.slug_title}</p>
    <h5>tags</h5><p>{project.tags}</p>
    <h5>image</h5><p>{project.image}</p>
    <h5>content</h5><p>{project.content}</p>
    <h5>github</h5><p>{project.github}</p>
    <h5>additionalImages</h5><p>{project.additionalImages}</p>
    </>
  )
  return (typeof project.title != "undefined") ?  <Container content={content} /> : <div className="centerIcon"><LoadingIcon /></div>
 
}

export default PortfolioItem;