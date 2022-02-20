import React, { useState, useEffect } from 'react'
import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'
import { useParams } from "react-router-dom";



function EditPost(props){
  const { id } = useParams()
  const editmethod = `../../API/${id}?_method=PATCH`
  const [project ,setProject] = useState([])

  useEffect(()=>{
   let fetchLink = `/API/${id}`
    fetch(fetchLink)
      .then((response) => response.json())
      .then((responseJson) => {
        setProject(responseJson.data);
      })
    },[id])

  const content = (
    <div>
        <h1> Edit Post </h1>
        <form action={editmethod} method="POST">
          <label> title </label><br/>
          <input type="text" defaultValue={project.title} name="title"/><br/>
          <label>tags </label><br/>
          <input type="text" defaultValue={project.tags} name="tags"/><br/>
          <label>image</label><br/>
          <input type="text" defaultValue={project.image} name="image" /><br/> 
          <label style={{resize:"both"}}>content</label><br/>
          <input type="text" defaultValue={project.content} name="content" /><br/> 
          <label>github</label><br/>
          <input type="text" defaultValue={project.github} name="github" /><br/> 
          <label>additionalImages</label><br/>
          <input type="text" defaultValue={project.additionalImages} name="additionalImages" /><br/> 
          <input type="submit" value="save changes"/>
        </form>
      </div>
  )

  return <Container content={<TextContainer content={content}/>}/>
}

export default EditPost;