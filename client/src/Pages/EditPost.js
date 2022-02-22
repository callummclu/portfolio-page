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

    let curr_tags = []
    try{
      for (var i = 0 ; i < (project.tags).length; i++) {  
        curr_tags.push(<span className="tag">{project.tags[i]}</span>)
      }
    } catch (err){
      curr_tags = [<><input type="text" name="tags[]"/><br/></>]
    }

  const content = (
    <div className="post">
        <h1> Edit Post </h1>
        <form action={editmethod} method="POST">
          <label> title </label><br/>
          <input type="text" defaultValue={project.title} name="title"/><br/>
          <label>tags </label><br/>
          <span>{curr_tags}</span><br/>
          <label>image</label><br/>
          <input type="text" defaultValue={project.image} name="image" /><br/> 
          <label>content</label><br/>
          <input type="text" defaultValue={project.content} name="content" /><br/><br/>
          <input type="submit" value="save changes"/>
        </form>
      </div>
  )

  return <Container content={<TextContainer content={content}/>}/>
}

export default EditPost;