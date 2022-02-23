import React, { useState, useEffect } from 'react'
import Container from '../components/container/Container'
import TextContainer from '../components/textContainer/TextContainer'

export default function Register(){

  const createmethod = `../../API/account/register`

	const content = (
		<div className="auth-card">
<h1>Register</h1>
<form action={createmethod} method="POST">
<div>
    <label for="name">Name</label><br/>
    <input
      type="name"
      name="name"
      placeholder="callum"
    />
  
</div><br/>
<div>
    <label for="email">Email</label><br/>
    <input
      type="email"
      name="email"
      placeholder="user@email.com"
    />
  </div><br/>
  <div >
    <label for="password">Password</label><br/>
    <input
      type="password"
      name="password"
      placeholder="********"
    />
  </div><br/>
  <div >
    <label for="password2">Confirm Password</label><br/>
    <input
      type="password"
      name="password2"
      placeholder="********"
    />
  </div><br/>
  <button type="submit" class="btn btn-primary btn-block">
    Register
  </button>
</form><br/>
<p >Have An Account? <a href="/login">Login</a></p>
		</div>
	)

	return <Container content={<TextContainer content={content}/>}/>
}