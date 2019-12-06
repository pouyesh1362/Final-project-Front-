import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ()=>{


  return(
 <div>
     <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo"><img src="https://i.imgur.com/uQOyvfI.png" alt="logo"></img></Link>
      <ul className="right hide-on-med-and-down">
       <li><NavLink  to="/" className="waves-effect waves-light btn" >Home</NavLink></li>
        <li><NavLink to = "/login" className="waves-effect waves-light btn">Sign in</NavLink></li>
        <li><NavLink to = "/register"  className="waves-effect waves-light btn">Sign UP</NavLink></li>

        <li><NavLink to="/"  className="waves-effect waves-light btn">Log out</NavLink></li>
        <li><NavLink to="/profile" className="waves-effect waves-light btn">Profile</NavLink></li>
        
         <li><NavLink to = "/yourhouses" className="waves-effect waves-light btn">Your House</NavLink></li>
        <li><NavLink to ="/market" className="waves-effect waves-light btn">Market</NavLink></li>  
      </ul>
    </div>
  </nav>
</div>
  )
};
export default Navbar;