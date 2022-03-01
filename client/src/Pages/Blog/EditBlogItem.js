import React, { useState, useEffect } from 'react'
import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function EditBlogItem(props){
  const { id } = useParams()
  const createmethod = `../../../API/blog/`
  const [project ,setProject] = useState([])
  const auth = props.auth
  const [md, setMd] = useState("")
  const [mdSummary, setMdSummary] = useState('')
  let [blogPost,setBlogPost] = useState({})
  useEffect(() => {
      fetch(`/API/blog/${id}`)
        .then((response) => response.json())
        .then((responseJson) => {
          setBlogPost(responseJson.data)
        })
  }, [id])


    let content = (

    <div className="post">
        <h1> Edit Blog Post </h1>
        <form action={createmethod  +blogPost.slug_title +"?_method=PATCH"} method="POST">
          <label> Title </label><br/>
          <input type="text" name="title" defaultValue={blogPost.title} required/><br/><br/>
          <label> Content </label>
          <textarea onChange={event=>setMd(event.target.value)} defaultValue={blogPost.content} type="text" name="content"/><br/>
          <ReactMarkdown children={md || blogPost.content} rehypePlugins={[rehypeRaw]} /><br/>
          <input type="submit" value="submit"/>
        </form>     
      </div>
  
  )

  return <Container style={{minHeight:"100vh"}} content={<TextContainer content={content}/>}/>
}
