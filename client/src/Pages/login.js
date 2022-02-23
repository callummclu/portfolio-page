import React, { useState, useEffect } from 'react'
import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'


export default function Login(){

  const createmethod = `../../API/account/login`

	const content = (
		<div className="auth-card">
			<h1> Login </h1>
			<form action={createmethod} method="POST">
			<div>
			<label for="email">Email</label><br/>
			<input
			type="email"
			name="email"
			placeholder="Enter Email"
			/>
			</div>
			<div>
			    <label for="password">Password</label><br/>
			    <input
			      type="password"
			      name="password"
			      placeholder="Enter Password"
			    />
			  
			</div><br/>
			<button type="submit" class="btn btn-primary btn-block">Login</button>
			<br/><br/>
			<span>Don't have an account? </span><a href="/register">create account</a>
			</form>
			<br/>
		</div>
	)

	return <Container content={<TextContainer content={content}/>}/>
}