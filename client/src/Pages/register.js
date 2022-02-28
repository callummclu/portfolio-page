import React from 'react'
import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'

export default function Register(){

	const content = (
		<div className="auth-card">
      <h1>Register</h1>
      <form action={`../../API/account/register`} method="POST">
        <div>
          <label for="name">Name</label><br/>
          <input type="name" name="name" placeholder="user" />
        </div><br/>

        <div>
          <label for="email">Email</label><br/>
          <input type="email" name="email" placeholder="user@email.com" />
        </div><br/>

        <div>
          <label for="password">Password</label><br/>
          <input type="password" name="password" placeholder="********" />
        </div><br/>

        <div>
          <label for="password2">Confirm Password</label><br/>
          <input type="password" name="password2" placeholder="********" />
        </div><br/>

        <button type="submit" class="submit-button">Register</button>
      </form>
      <br/>
      <p>Have An Account? <a href="/login">Login</a></p>
		</div>
	)
	return <Container style={{minHeight:"100vh"}} content={<TextContainer content={content}/>}/>
}