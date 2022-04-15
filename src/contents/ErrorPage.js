// JavaScript Document
import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
	
	return (
	<div className='container d-flex flex-column justify-content-center align-items-center'>
	  <h4>Error 404</h4>
	  <Link to='/' className='btn btn-primary mt-5' style={{width: '50%'}}>Go back to Homepage</Link>
	</div>
	)
}

export default ErrorPage