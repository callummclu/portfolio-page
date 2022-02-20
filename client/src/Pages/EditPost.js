import React from 'react'

import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'



function EditPost(props){

  const createmethod = `../../API/create`

  const content = (
    <div>
        <form action={createmethod} method="POST">
          <label> title </label><br/>
          <input type="text" name="title"/><br/>
          <label>tags </label><br/>
          <input type="text" name="tags"/><br/>
          <label>image</label><br/>
          <input type="text" name="image"/><br/> 
          <label>content</label><br/>
          <input type="text" name="content"/><br/> 
          <label>github</label><br/>
          <input type="text" name="github"/><br/> 
          <label>additionalImages</label><br/>
          <input type="text" name="additionalImages"/><br/> 
          <input type="submit" value="post"/>
        </form>
      </div>
  )

  return <Container content={<TextContainer content={content}/>}/>
}

export default EditPost;