import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import { useParams } from "react-router-dom";
import './PortfolioItem.css'

import Container from '../../components/container/Container'
import Banner from '../../components/Banner/Banner'
import TextContainer from '../../components/textContainer/TextContainer'
import IndexList from '../../components/IndexList/IndexList'
import Error from '../Error'
import LinkBox from '../../components/figma/Figma'

function PortfolioItem(props){
  // used for getting project data
  const [project ,setProject] = useState([])

  // used for like system and checking if authorised
  const [user, setUser] = useState({})

  // sites url slug title
  const { id } = useParams();

  // REST API ACCESS
  const editmethod = `../../API/like/${id}?_method=PATCH`
  const deletemethod = `../../API/${id}?_method=DELETE`
  const editLink = `../../portfolio/${id}/edit`

  // gets post data
  useEffect(()=>{
    let fetchLink = `/API/${id}`
    fetch(fetchLink)
      .then((response) => response.json())
      .then((responseJson) => {
        setProject(responseJson.data);
      })
    },[id])

  // gets users data
  useEffect(()=>{
    let fetchLink = `/API/account/is_authenticated`
    fetch(fetchLink)
      .then((response) => response.json())
      .then((responseJson) => {
        setUser(responseJson)
      })
  },[])   

  try {
      let liked = false
      if((user.message) === true ){
        if ((user.likedposts).includes(id)){
          liked = true
        }        
      }
    let content = (
      <>
       {user.message ? <><span><form action={deletemethod} method="POST"><input type="submit" value="delete"/></form></span><span><a href={editLink}><button>edit</button></a></span></> : <></>}<br/><br/>
       {!liked ? <><form action={editmethod} method="POST"><input type="submit" name="likes" value="like"/></form><p>{project.likes}</p></> : <><form action={editmethod} method="POST"><input type="submit" name="likes" value="unlike"/></form><p>{project.likes}</p></>} 
        {/* TITLE DATA */}<br/><br/>
          {project.title}

        {/* TAGS DATA */}<br/><br/>
          {project.tags}
        {/* ACTIVITY INDICATOR DATA */}<br/><br/>
          {project.activity}
        {/* INDEX SUMMARY DATA (MARKDOWN) */}<br/><br/>
          {project.index_summary}
        {/* MAIN POST CONTENT DATA (MARKDOWN) to use markdown display (<ReactMarkdown>...</ReactMarkdown> */}<br/><br/>
          {project.content}
        {/* FIGMA LINK */}<br/><br/>
          {project.figma}
        {/* GITHUB LINK */}<br/><br/>
          {project.github}
        }
      </>
    )
  
  return <Container content={content} />
  } catch(e){
    return (<Error type="404" message="project not found"/>)
  }
}

export default PortfolioItem;