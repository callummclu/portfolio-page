import React, { useState, useEffect } from 'react'

import {Helmet} from 'react-helmet';
import { useParams } from "react-router-dom";
import './PortfolioItem.css'

import Container from '../../components/container/Container'
import LoadingIcon from '../../components/LoadingCircle/LoadingIcon'
import Banner from '../../components/Banner/Banner'
import TextContainer from '../../components/textContainer/TextContainer'
import Error from '../Error'
import ReactMarkdown from 'react-markdown'


function PortfolioItem(props){

  const auth = props.auth

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



  
  try {
      let tags = project.tags
      let tagList = []
      for (let i = 0; i<tags.length; i++){
        tagList.push(<span className="tag">{tags[i]}</span>)
      }
       let content = (
        <div>
          <Banner />
          <TextContainer content={
            <div>
              <h1>
                {project.title}
                {auth ?
                  <>
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
                </> 
                :
                <></>
              }
              </h1>
              <p>{tagList}</p>

              {/*<p>likes: {project.likes}</p>*/}
            </div>} />
          <br/><br/>
          <br/>
          <TextContainer content={
          <div>  
            <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
        }/></div>
    )  
  
  return <Container content={content} />
 }
 catch(e){
  return (<Error type="404" message="project not found"/>)
 }
}

export default PortfolioItem;