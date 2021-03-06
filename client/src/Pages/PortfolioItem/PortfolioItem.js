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
import rehypeRaw from 'rehype-raw'

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

  let activity = <></>
  try {
      let figmaActive = false
      let githubActive = false
      if (project.figma !== ""){
        figmaActive = true
      }
      if (project.github !== ""){
        githubActive = true
      }
      switch(project.activity){
        case "inactive":
          activity = <div className="activity-indicator inactive">inactive</div>
          break
        case "in progress":
          activity = <div className="activity-indicator in-progress">in progress</div>
          break
        case "finished":
          activity = <div className="activity-indicator active">finished</div>
          break
        default:
          activity = <div className="activity-indicator not-available">not available</div>
          break
      }
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
          {breadcrumbs_arr}
          
          <TextContainer content={
            <div>
              <h1>
                <span className="title-heading">{project.title}</span>
                {auth ?
                  <>
                    <span>
                      <div className="change-box delete">
                        <form action={deletemethod} method="POST">
                          <input type="submit" value="delete"/>
                        </form>
                      </div>
                    </span>

                    <span>
                      <a href={editLink}><div className="change-box edit">edit</div></a>
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
          <IndexList content={<ReactMarkdown rehypePlugins={[rehypeRaw]}>{project.index_summary || `### ${project.title}\n---\n - content`}</ReactMarkdown>}/>
          <br/><br/>
          <TextContainer content={
          <div>
            <br/>
            <span>{activity}</span>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{project.content}</ReactMarkdown>
          </div>

          
        }/>

        {figmaActive ? <LinkBox title="Figma" link={project.figma}/> : <></>}
        {githubActive ? <LinkBox title="Github" link={project.github}/> : <></>}
        <br/>
        <br/>
        </div>
    )  
  
  return <Container content={content} />
  } catch(e){
    return (<Error type="404" message="project not found"/>)
  }
}

export default PortfolioItem;