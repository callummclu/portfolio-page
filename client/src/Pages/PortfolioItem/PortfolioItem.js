import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import { useParams } from "react-router-dom";
import './PortfolioItem.css'

import Container from '../../components/container/Container'
import Banner from '../../components/Banner/Banner'
import TextContainer from '../../components/textContainer/TextContainer'
import Error from '../Error'

function PortfolioItem(props){

  const auth = props.auth

  const [project ,setProject] = useState([])
  const [user, setUser] = useState({})
  const { id } = useParams();
  const editmethod = `../../API/like/${id}?_method=PATCH`
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

  useEffect(()=>{
    let fetchLink = `/API/account/is_authenticated`
    fetch(fetchLink)
      .then((response) => response.json())
      .then((responseJson) => {
        setUser(responseJson)
      })
  },[])   

  try {
      let tags = project.tags
      let tagList = []
      for (let i = 0; i<tags.length; i++){
        tagList.push(<span className="tag">{tags[i]}</span>)
      }
      let liked = false
      if((user.message) === true ){
        if ((user.likedposts).includes(id)){
          liked = true
        }        
      }
      let likes = project.likes

      if(likes>999){
        likes /= 1000
        likes = likes.toString().slice(0,-1).slice(0,-1) + "k"
      }

      let content = (
        <div>
          <Banner/>
          <TextContainer content={
            <div>
              <h1>
                <span className="title-heading">{project.title}</span>
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
                : <></>}

              <p style={{marginTop:"20px",marginBottom:"-5px"}}>
                
                {!liked ? 
                <div className="change-box like-inactive"> 
                  <form action={editmethod} method="POST">
                    <input type="submit" name="likes" value=" "/>
                  </form> 
                  <p style={{display:"inline", position:"absolute",marginTop:"7.5px",marginLeft:"40px",fontSize:"15px"}}>{likes}</p>               
                </div>
                : 
                <div className="change-box like-active">
                  <form action={editmethod} method="POST">
                    <input type="submit" name="likes" value=" "/>
                  </form> 
                  <p style={{display:"inline", position:"absolute",marginTop:"7.5px",marginLeft:"40px",fontSize:"15px"}}>{likes}</p>               
  
                </div>
              }
              </p>
              </h1>
              <p>{tagList}</p>
            </div>} />
          <br/><br/>
          <br/>
          <TextContainer content={
          <div>  
            <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
        }/></div>
    )  
  
  return <Container divstyle={{backgroundColor: "rgba(240, 240, 240,0.9)"}} content={content} />
  } catch(e){
    return (<Error type="404" message="project not found"/>)
  }
}

export default PortfolioItem;