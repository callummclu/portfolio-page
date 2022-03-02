import React, { useState, useEffect } from 'react'
import Container from '../../components/container/Container'
import TextContainer from '../../components/textContainer/TextContainer'
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

function EditPost(props){
  const { id } = useParams()
  const editmethod = `../../API/account/edit?_method=PATCH`
  const auth = props.auth
  const [user,setUser] = useState({})
  useEffect(()=>{
    let fetchLink = `/API/account/is_authenticated`
    fetch(fetchLink)
      .then((response) => response.json())
      .then((responseJson) => {
        setUser(responseJson)
      })
  },[])  

    let content = (

    <div className="post">
        <h1> Edit Account </h1>
        <form action={editmethod} method="POST">
          <label> Name </label><br/>
          <input style={{width:"300px",maxWidth:"80%"}} type="text" defaultValue={user.name} name="name" required/><br/><br/>
          <label> Email </label><br/>
          <input style={{width:"300px",maxWidth:"80%"}} type="text" defaultValue={user.email} name="email" required/><br/><br/>
          <input type="submit" value="save changes"/>
        </form>
      </div>
  
  )

  return <Container style={{minHeight:"100vh"}}content={<TextContainer content={content}/>}/>
}

export default EditPost;