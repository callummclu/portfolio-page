import React, { useState, useEffect } from 'react'
import Container from '../components/container/Container'

export default function Register(){

  const createmethod = `../../API/account/register`

	const content = (
		<>
<h1>Register</h1>
<form action={createmethod} method="POST">
<div>
    <label for="name">Name</label>
    <input
      type="name"
      name="name"
      placeholder="Enter Name"
    />
  
</div>
<div>
    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      placeholder="Enter Email"
    />
  </div>
  <div >
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      placeholder="Create Password"
    />
  </div>
  <div >
    <label for="password2">Confirm Password</label>
    <input
      type="password"
      name="password2"
      placeholder="Confirm Password"
    />
  </div>
  <button type="submit" class="btn btn-primary btn-block">
    Register
  </button>
</form>
<p >Have An Account? <a href="/login">Login</a></p>
		</>
	)

	return <Container content={content}/>
}