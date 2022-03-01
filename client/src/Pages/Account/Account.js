import React, {useState, useEffect} from 'react'

import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'

export default function AccountPage(){
	let [user,setUser] = useState([])
	const [projects, setProjects] = useState({})
  	useEffect(() => {
    	fetch(`/API`)
     	 .then((response) => response.json())
     	 .then((responseJson) => {
     	   setProjects(responseJson.data)
      	})
 	 }, [])
	 useEffect(()=>{
    	let fetchLink = `/API/account/is_authenticated`
    	fetch(fetchLink)
    	  .then((response) => response.json())
    	  .then((responseJson) => {
    	    setUser(responseJson)
    	  })
  	},[])   

    const deletemethod = `../../API/account?_method=DELETE`


	let content = <></>
	try {

		let role = "user"
		if (user.permissions === "2"){
			role = "admin"
		}
		let likedposts = []
		for (let i = 0; i<(user.likedposts).length; i++){
			likedposts.push(<><a href={"portfolio/"+user.likedposts[i]}>{(user.likedposts[i]).replace(/-/g," ")}</a><hr/></>)
		}
		if (user.message){
			content = (
					<>
						<TextContainer content = {
							<>
						<h1>Account<span style={{color:"lightgray"}}> {role}</span></h1>
						<p style={{fontSize:"18px"}}>Hey {user.name}, <span><a href="../../../API/account/logout">logout</a></span>?</p>
						</>
						}/>
						<br/><br/>
						<TextContainer content = {
							<>
								<h1> Liked Posts </h1>
								<br/>
								<p>{likedposts}</p>
							</>
						}/>
						<h1> Account Settings </h1>
						<form action={deletemethod} method="POST">
                          <input type="submit" value="Delete Account"/>
                        </form><br/>
						<a href="account/edit"> <button>Change Details </button></a>

					</>
			)			
		} else {
			content = <h1> you do not have access to this page </h1>
		}

	} catch {
		content = <h1> you do not have access to this page </h1>
	}
	return (
		<Container style={{minHeight: "100vh"}}content={content}/>)
}