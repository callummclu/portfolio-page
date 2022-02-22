import React, { useState, useEffect } from 'react'

import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'

export default function NewPost(props){

  const createmethod = `../../API/create`

  const [tagsInList, setTagsInList] = useState([])

  const addTagInput = () => {
    setTagsInList([tagsInList,<><input type="text" name="tags[]"/><br/></>])
  }

  const content = (
    <div className="post">
        <h1> Create a post </h1>
        <form action={createmethod} method="POST">
          <label> title </label><br/>
          <input type="text" name="title"/><br/>
          <label>tags </label><input type="button" onClick={addTagInput} value="Add" /><br/>
          <input type="text" name="tags[]"/><br/>
          {tagsInList.map(entry => <>{entry}</>)}
          <label>image</label><br/>
          <input type="text" name="image"/><br/> 
          <label>content</label><br/>
          <input type="text" name="content"/><br/><br/> 
          <input type="submit" value="post"/>
        </form>
      </div>
  )

  return <Container content={<TextContainer content={content}/>}/>
}