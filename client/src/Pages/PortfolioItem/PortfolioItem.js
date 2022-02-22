import React, { useState, useEffect } from 'react'

import {Helmet} from 'react-helmet';
import { useParams } from "react-router-dom";
import './PortfolioItem.css'

import Container from '../../components/container/Container'
import LoadingIcon from '../../components/LoadingCircle/LoadingIcon'
import Banner from '../../components/Banner/Banner'
import TextContainer from '../../components/textContainer/TextContainer'



function PortfolioItem(props){

  const [project ,setProject] = useState([])
  const { id } = useParams();

  const deletemethod = `../../API/${id}?_method=DELETE`
  const editLink = `../../portfolio/${id}/edit`
  useEffect(()=>{
   let fetchLink = `/API/${id}`
    fetch(fetchLink)
      .then((response) => response.json())
      .then((responseJson) => {
        setProject(responseJson.data);
      })
    },[id])



  let tags = project.tags
  try {
  let tagList = []
  for (let i = 0; i<tags.length; i++){
    tagList.push(<span className="tag">{tags[i]}</span>)
  }
  const content = (
    <div>
      <Helmet>
        <style>{'body { background-color: red; }'}</style>
      </Helmet>
      <Banner />
      <TextContainer content={
        <div>
          <h1>
            {project.title}
            <span>
              <div className="change-box delete">
                <form action={deletemethod} method="POST">
                  <input type="submit" value=""/>
                </form>
              </div>
            </span>
            <span>
              <a href={editLink}><div className="change-box edit"></div></a>
            </span>
          </h1>
          <p>{tagList}</p>
        </div>} />
      <br/><br/>
      <br/>
      <TextContainer content={
      <div>    
        <p>{project.content}</p>
      </div>
    }/></div>
  )
  return (typeof project.title != "undefined") ?  <Container content={content} /> : <div className="centerIcon"><LoadingIcon /></div>
 }
 catch(e){
  return (<LoadingIcon/>)
 }
}

export default PortfolioItem;