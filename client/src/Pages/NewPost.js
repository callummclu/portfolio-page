import React from 'react'

import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'



function NewPost(props){

  const createmethod = `../../API/create`

  const content = (
    <div>
        <form action={createmethod} method="POST">
          <label> title </label><br/>
          <input type="text" name="title" value="title"/><br/>
          <label> slug_title </label><br/>
          <input type="text" name="slug_title" value="slug_title"/><br/>
          <input type="submit" value="post"/>
        </form>
      </div>
  )

  return <Container content={<TextContainer content={content}/>}/>
}

export default NewPost;