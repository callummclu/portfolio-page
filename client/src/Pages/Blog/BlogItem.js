import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'
import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import Banner from '../../components/Banner/Banner'
import rehypeRaw from 'rehype-raw'



export default function BlogItem(props){
	let [blogPost,setBlogPost] = useState({})
	let [user,setUser] = useState({})
	const { id } = useParams()
 	 const editmethod = `../../API/blog/like/${id}?_method=PATCH`

	useEffect(() => {
	    fetch(`/API/blog/${id}`)
	      .then((response) => response.json())
	      .then((responseJson) => {
	        setBlogPost(responseJson.data)
	      })
	}, [id])
  	useEffect(()=>{
    let fetchLink = `/API/account/is_authenticated`
    	fetch(fetchLink)
    	  .then((response) => response.json())
    	  .then((responseJson) => {
    	    setUser(responseJson)
    	  })
  	},[])   
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
		  let liked = false
	      if((user.message) === true ){
	        if ((user.likedBlogposts).includes(id)){
	          liked = true
	        }        
	      }
	      let likes = blogPost.likes

	      if(likes>999){
	        likes /= 1000
	        likes = likes.toString().slice(0,-1).slice(0,-1) + "k"
	      }
		return <Container style={{minHeight:"100vh"}} content={<><Banner/>{breadcrumbs_arr}<TextContainer content={<><h1>{blogPost.title}</h1><p className="author">by {blogPost.author || "post created before author field was added."}{!liked ? 
                <>
                <br/>
                <br/>
                <br/>
                <div className="change-box like-inactive"> 
                  <form action={editmethod} method="POST">
                    <input type="submit" name="likes" value=" "/>
                  </form> 
                  <p style={{display:"inline", position:"absolute",marginTop:"7.5px",marginLeft:"40px",fontSize:"15px"}}>{likes}</p>               
                </div>
                </>
                : 
                <>
                <br/>
                <br/>
                <br/>
                <div className="change-box like-active">
                  <form action={editmethod} method="POST">
                    <input type="submit" name="likes" value=" "/>
                  </form> 
                  <p style={{display:"inline", position:"absolute",marginTop:"7.5px",marginLeft:"40px",fontSize:"15px"}}>{likes}</p>               
  
                </div>
                </>
              }</p></>}/><br/><br/>{props.auth ? <><button><a href={redirect_link}>edit</a> </button><br/><br/></>: <></>}<TextContainer content={<div style={{width:"calc(100% - 100px)",padding:"50px"}}><ReactMarkdown rehypePlugins={[rehypeRaw]}>{blogPost.content}</ReactMarkdown><br/></div>}/><br/><br/></>}/>
	} catch(err){
		return <Container style={{minHeight:"100vh"}} content={<TextContainer content={<><h1>post does not exist</h1><a href="..">go back</a><br/><br/></>
}/>}/>
	}
}