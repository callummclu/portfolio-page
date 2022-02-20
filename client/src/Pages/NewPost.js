import React from 'react'

import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'



function NewPost(props){

  const createmethod = `../../API/${id}`

  return (
    <div>
        <form action={createmethod} method="POST">
          <label> title </label>
          <input type="text" name="title" value="title"/>
          <label> slug_title </label>
          <input type="text" name="slug_title" value="slug_title"/>
        </form>
      </div>
    }
  )
}

export default NewPost;