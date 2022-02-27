import React, { useState } from 'react'

import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'
import ReactMarkdown from 'react-markdown'


export default function NewPost(props){
  const createmethod = `../../API/create`

  const [tagsInList, setTagsInList] = useState([])
  const [md, setMd] = useState('')
  const [mdSummary, setMdSummary] = useState('')

  const addTagInput = () => {
    setTagsInList([tagsInList,<><input type="text" name="tags[]"/><br/></>])
  }
  
  /* conditional for not showing page if not authorised */
  let content = <></>
  !(props.auth) ? content = (<><h1>404</h1><p>you do not have access to this page</p></>) : content = (
    <div className="post">
        <h1> Create a post </h1>
        <form action={createmethod} method="POST">

          {/* Title field input*/}
          <label> title </label><br/>
          <input type="text" name="title" required/><br/><br/>

          {/* tag array field input*/}
          <label>tags </label><input type="button" onClick={addTagInput} value="Add" /><br/>
          <input type="text" name="tags[]"/><br/>
          {tagsInList.map(entry => <>{entry}</>)}<br/><br/>

          <label>Activity</label><br/>

          <input type="radio" name="activity" value="inactive" />
          <label>inactive</label><br/> 
          <input type="radio" name="activity" value="in progress" />
          <label>in progress</label><br/> 
          <input type="radio" name="activity" value="finished" />
          <label>complete</label><br/><br/>

          {/* banner image input*/}
          <label>Banner Image</label><br/>
          <input type="text" name="image"/><br/> <br/>

          {/* description input */}
          <label>description</label>
          <textarea type="text" name="description"/>
          <br/><br/>
          {/* index input */}
          <label>Index Summary</label>
          <textarea onChange={event=>setMdSummary(event.target.value)} type="text" name="index_summary"/><br/>
          <ReactMarkdown>{mdSummary}</ReactMarkdown><br/>

          {/* Github Link input*/}
          <label>Github Link</label><br/>
          <input type="text" name="github"/><br/> <br/>

          {/* Figma Link input*/}
          <label>Figma Link</label><br/>
          <input type="text" name="figma"/><br/> <br/>

          {/* content input */}
          <label>content</label><br/>
          <textarea onChange={event=>setMd(event.target.value)} type="text" name="content"/><br/><br/> 
          <ReactMarkdown>{md}</ReactMarkdown>
          
          {/* submit button */}
          <input type="submit" value="post"/>
        </form>
      </div>
  )

  return <Container content={<TextContainer content={content}/>}/>
}