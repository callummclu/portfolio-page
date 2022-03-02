import React from 'react'
import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'


export default function Login(){

  const createmethod = `../../API/account/login`

	const content = (
		<div className="auth-card">
		      <a href=".">back</a>

			<h1> Login </h1>
			<form action={createmethod} method="POST">
				{/* email input */}
				<div>
					<label for="email">Email</label><br/>
					<input type="email" name="email" placeholder="Enter Email" />
				</div>
				<br/>
				{/* password input */}
				<div>
			    <label for="password">Password</label><br/>
			    <input type="password" name="password" placeholder="Enter Password" />		
				</div>
				<br/>
				{/* submit input */}
				<button type="submit" class="submit-button">Login</button>
				<br/><br/>
				<span>Don't have an account? </span><a href="/register">create account</a>
			</form>
			<br/>
		</div>
	)
	return <Container style={{minHeight:"100vh"}} content={<TextContainer content={content}/>}/>
}