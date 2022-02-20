import React from 'react'

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
          <input type="text" name="title" value={project.title}/><br/>
          <label>tags </label><br/>
          <input type="text" name="tags" value={project.tags}/><br/>
          <label>image</label><br/>
          <input type="text" name="image" value={project.image}/><br/> 
          <label>content</label><br/>
          <input type="text" name="content" value={project.content}/><br/> 
          <label>github</label><br/>
          <input type="text" name="github" value={project.github}/><br/> 
          <label>additionalImages</label><br/>
          <input type="text" name="additionalImages" value={project.additionalImages}/><br/> 
          <input type="submit" value="save changes"/>
        </form>
      </div>
  )

  return <Container content={<TextContainer content={content}/>}/>
}

export default EditPost;