import React, { useState, useEffect } from 'react'

import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'
import ReactMarkdown from 'react-markdown'


export default function NewPost(props){
  const auth = props.auth
  const createmethod = `../../API/create`

  const [tagsInList, setTagsInList] = useState([])
  const [md, setMd] = useState('')


  const addTagInput = () => {
    setTagsInList([tagsInList,<><input type="text" name="tags[]"/><br/></>])
  }

  let content = <></>

  {!auth ? content = (<><h1>404</h1><p>you do not have access to this page</p></>) : 


    content = (
    <div className="post">
        <h1> Create a post </h1>
        <form action={createmethod} method="POST">
          <label> title </label><br/>
          <input type="text" name="title" required/><br/>
          <label>tags </label><input type="button" onClick={addTagInput} value="Add" /><br/>
          <input type="text" name="tags[]"/><br/>
          {tagsInList.map(entry => <>{entry}</>)}
          <label>Banner Image</label><br/>
          <input type="text" name="image"/><br/> 
          <label>description</label>
          <textarea type="text" name="description"/>
          <label>content</label><br/>
          <textarea onChange={event=>setMd(event.target.value)} type="text" name="content"/><br/><br/> 
          <ReactMarkdown>{md}</ReactMarkdown>
          <input type="submit" value="post"/>
        </form>
      </div>
  )
  }

  return <Container content={<TextContainer content={content}/>}/>
}