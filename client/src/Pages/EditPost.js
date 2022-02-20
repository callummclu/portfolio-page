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
        <form action={editmethod} method="PATCH">
          <label> title </label><br/>
          <input type="text" name="title" value={project.title} contenteditable="true"/><br/>
          <label>tags </label><br/>
          <input type="text" name="tags" value={project.tags} contenteditable="true"/><br/>
          <label>image</label><br/>
          <input type="text" name="image" value={project.image} contenteditable="true"/><br/> 
          <label style={{resize:"both"}}>content</label><br/>
          <input type="text" name="content" value={project.content} contenteditable="true"/><br/> 
          <label>github</label><br/>
          <input type="text" name="github" value={project.github} contenteditable="true"/><br/> 
          <label>additionalImages</label><br/>
          <input type="text" name="additionalImages" value={project.additionalImages} contenteditable="true"/><br/> 
          <input type="submit" value="save changes"/>
        </form>
      </div>
  )

  return <Container content={<TextContainer content={content}/>}/>
}

export default EditPost;