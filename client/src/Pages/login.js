import React, { useState, useEffect } from 'react'
import Container from '../components/container/Container'

export default function Login(){

  const createmethod = `../../API/account/login`

	const content = (
		<>
			<form action={createmethod} method="POST">
			<div>
			<label for="email">Email</label>
			<input
			type="email"
			name="email"
			placeholder="Enter Email"
			/>
			</div>
			<div>
			    <label for="password">Password</label>
			    <input
			      type="password"
			      name="password"
			      placeholder="Enter Password"
			    />
			  
			</div>
			<button type="submit" class="btn btn-primary btn-block">Login</button>
			<a href="/register">create account</a>
			</form>
		</>
	)

	return <Container content={content}/>
}