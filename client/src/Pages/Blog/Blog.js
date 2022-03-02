import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'
import React, {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Banner from '../../components/Banner/Banner'


export default function Blog(props){
	const createmethod = `../API/blog`
	const [blogPosts,setBlogPosts] = useState([])
  	const [md, setMd] = useState("Markdown Preview")
  	const [indexMd, setIndexMd] = useState("Markdown Preview")

	useEffect(() => {
	    fetch(`/API/blog`)
	      .then((response) => response.json())
	      .then((responseJson) => {
	        setBlogPosts(responseJson.data)
	      })
	}, [])
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
	let content = <></>

	try{
		let posts_arr = []
		if (blogPosts.length === 0){
			posts_arr = <p>no blog posts here yet :(</p>
		} else if (blogPosts.length === 1){
			posts_arr = [<><form action={createmethod + '/' +blogPosts[0].slug_title +"?_method=DELETE"} method="POST">
							<label><a href={"../../blog/" + blogPosts[0].slug_title}>{(blogPosts[0].slug_title).replaceAll('-',' ')}</a>{props.auth ? " - " : "" }</label>
							{props.auth ?<input type="submit" value="delete"/> : <></>}
						</form>		</>]
		} else {
		for(let i = 0; i<blogPosts.length; i++){
			posts_arr.push(
				<>
					<TextContainer content={
						<>
						<br/>
						<form action={createmethod + '/' +blogPosts[i].slug_title +"?_method=DELETE"} method="POST">
							<label><a href={"../../blog/" + blogPosts[i].slug_title}>{(blogPosts[i].slug_title).replaceAll('-',' ')}</a><span style={{float:"right", color:'darkgray'}}>{blogPosts[i].author}</span>{props.auth ? " - " : "" }</label>
							{props.auth ?<input type="submit" value="delete"/> : <></>}
						</form>
						<br/>
						</>
					}/>
					<br/><br/>
				</>
			)
		}
		posts_arr.reverse()
		}
		{props.auth ? content = (
			<>
				<form action={createmethod + "/create"} method="POST">
					<label> Title </label><br/>
					<input type="text" name="title" required/><br/><br/>
					<label> Content </label>
					<textarea onChange={event=>setMd(event.target.value)} type="text" name="content"/><br/>
          			<ReactMarkdown children={md} rehypePlugins={[rehypeRaw]} /><br/>
					<input type="submit" value="submit"/>
				</form>
				<br/><br/>
				{posts_arr}
			</> 
		): content = <><br/><br/>{posts_arr}<br/></> }
	} catch(err){
		content = <><h1> Page Coming Soon </h1></>
	}
	return <Container style={{minHeight:"100vh"}} content={<><Banner/>{breadcrumbs_arr}<TextContainer content={<><h1> Blog</h1><p>Browse Some blog posts ive written on current technologies.</p></>}/><br/><br/>{content}<br/><br/><br/><br/></>}/>
}