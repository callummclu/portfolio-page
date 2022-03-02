import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'
import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import Banner from '../../components/Banner/Banner'
import rehypeRaw from 'rehype-raw'



export default function BlogItem(props){
	let [blogPost,setBlogPost] = useState({})
	const { id } = useParams()
	useEffect(() => {
	    fetch(`/API/blog/${id}`)
	      .then((response) => response.json())
	      .then((responseJson) => {
	        setBlogPost(responseJson.data)
	      })
	}, [id])
  let breadcrumbs = (window.location.href).split('/').splice(1).splice(1).splice(1)
  breadcrumbs.unshift('home')

  let breadcrumbs_arr = []
  let breadcrumbs_link = ""
  for (let i = 0; i<breadcrumbs.length;i++){
    breadcrumbs_link = "../../../../../"
    for(let j = 0; j<i; j++){
      breadcrumbs_link += breadcrumbs[j+1]+'/'
      
    }
    breadcrumbs_arr.push(<a className="breadcrumb" href={breadcrumbs_link}>{breadcrumbs[i]}</a>)
  }
	const redirect_link = `/blog/${id}/edit`
	try {
		return <Container style={{minHeight:"100vh"}} content={<><Banner/>{breadcrumbs_arr}<TextContainer content={<><h1>{blogPost.title}</h1><p className="author">by {blogPost.author || "post created before author field was added."}</p></>}/><br/><br/>{props.auth ? <><button><a href={redirect_link}>edit</a> </button><br/><br/></>: <></>}<TextContainer content={<div style={{width:"calc(100% - 100px)",padding:"50px"}}><ReactMarkdown rehypePlugins={[rehypeRaw]}>{blogPost.content}</ReactMarkdown><br/></div>}/><br/><br/></>}/>
	} catch(err){
		return <Container style={{minHeight:"100vh"}} content={<TextContainer content={<><h1>post does not exist</h1><a href="..">go back</a><br/><br/></>
}/>}/>
	}
}