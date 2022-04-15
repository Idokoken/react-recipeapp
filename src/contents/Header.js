// JavaScript Document
import React from 'react'
//import './header.css'
import {Link} from 'react-router-dom'


function Header() {
	
	return (
	<div>
	 <nav className="navbar navbar-dark bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img src="/images/logo.png" alt="" width="30" height="24" />
    </Link>  
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item display-5">
         Food Recipe App
        </li>
      </ul>
  </div>
</nav>
	</div>
	)
}

export default Header