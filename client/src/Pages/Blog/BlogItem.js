import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'
import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import Banner from '../../components/Banner/Banner'
import rehypeRaw from 'rehype-raw'



export default function BlogItem(){
	let [blogPost,setBlogPost] = useState({})
	const { id } = useParams()
	useEffect(() => {
	    fetch(`/API/blog/${id}`)
	      .then((response) => response.json())
	      .then((responseJson) => {
	        setBlogPost(responseJson.data)
	      })
	}, [id])
	const redirect_link = `/blog/${id}/edit`
	try {
		return <Container style={{minHeight:"100vh"}} content={<><Banner/><h1>{blogPost.title}</h1><button><a href={redirect_link}>edit</a></button><TextContainer content={<><ReactMarkdown rehypePlugins={[rehypeRaw]}>{blogPost.content}</ReactMarkdown><br/></>}/><br/><br/></>}/>
	} catch(err){
		return <Container style={{minHeight:"100vh"}} content={<TextContainer content={<h1>post does not exist</h1>}/>}/>
	}
}