import React, { useState, useEffect } from 'react'
import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

function EditPost(props){
  const { id } = useParams()
  const editmethod = `../../API/${id}?_method=PATCH`
  const [project ,setProject] = useState([])
  const auth = props.auth
  const [md, setMd] = useState("")
  const [mdSummary, setMdSummary] = useState('')

  useEffect(()=>{
   let fetchLink = `/API/${id}`
    fetch(fetchLink)
      .then((response) => response.json())
      .then((responseJson) => {
        setProject(responseJson.data);
      })
    },[id])

    let curr_tags = []
    let activity = <></>
    try{
      switch(project.activity){
        case "inactive":
          activity = (
            <>
              <input type="radio" name="activity" value="inactive" checked="checked"/>
              <label>inactive</label><br/> 
              <input type="radio" name="activity" value="in progress" />
              <label>in progress</label><br/> 
              <input type="radio" name="activity" value="finished" />
              <label>complete</label><br/> 
            </>          
          )
          break;
        case "in progress":
          activity = (
            <>
              <input type="radio" name="activity" value="inactive" />
              <label>inactive</label><br/> 
              <input type="radio" name="activity" value="in progress" checked="checked"/>
              <label>in progress</label><br/> 
              <input type="radio" name="activity" value="finished" />
              <label>complete</label><br/>               
            </>
          )
          break
        case "finished":
          activity = (
            <>
              <input type="radio" name="activity" value="inactive" />
              <label>inactive</label><br/> 
              <input type="radio" name="activity" value="in progress" />
              <label>in progress</label><br/> 
              <input type="radio" name="activity" value="finished" checked="checked"/>
              <label>complete</label><br/>                             
            </>
          )
          break
        default:
          activity = (
            <>
              <input type="radio" name="activity" value="inactive" />
              <label>inactive</label><br/> 
              <input type="radio" name="activity" value="in progress" />
              <label>in progress</label><br/> 
              <input type="radio" name="activity" value="finished"/>
              <label>complete</label><br/>                 
            </>
          )
      }

      for (var i = 0 ; i < (project.tags).length; i++) {  
        curr_tags.push(<span className="tag">{project.tags[i]}</span>)
      }

    } catch (err){
      curr_tags = [<><input type="text" name="tags[]"/><br/></>]
    }
  let content = (<></>)

  !auth ? 

    content = (
      <>
        <h1>404</h1>
        <p>you do not have access to this page.</p>
      </>
    )

    : 

    content = (

    <div className="post">
        <h1> Edit Post </h1>
        <form action={editmethod} method="POST">
          <label> Title </label><br/>
          <input type="text" defaultValue={project.title} name="title"/><br/>
          <br/>
          <label>Tags </label><br/>
          <span>{curr_tags}</span><br/><br/>
          <label>Activity</label><br/>
          <div style={{paddingLeft:"25px"}}>
          {activity}
          </div><br/>
          <label>Banner Image</label><br/>
          <input type="text" defaultValue={project.image} name="image" /><br/><br/> 
          <label>Index Summary</label>
          <textarea onChange={event=>setMdSummary(event.target.value)} type="text" defaultValue={project.index_summary} name="index_summary"/><br/>
          <ReactMarkdown>{mdSummary}</ReactMarkdown><br/>
          <label>Github Link</label><br/>
          <input type="text" defaultValue={project.github} name="github"/><br/> <br/>
          <label>Figma Link</label><br/>
          <input type="text" defaultValue={project.figma} name="figma"/><br/><br/> 
          <label>Content</label><br/>
          <textarea onChange={event=>setMd(event.target.value)} type="text" defaultValue={project.content} name="content" /><br/><br/>
          <ReactMarkdown>{md}</ReactMarkdown>
          <input type="submit" value="save changes"/>
        </form>
      </div>
  
  )

  return <Container content={<TextContainer content={content}/>}/>
}

export default EditPost;