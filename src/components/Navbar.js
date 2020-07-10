import React from 'react'
import { Link } from "react-router-dom"
  
const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/ownprofile">Profile</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/allusers">All Users</Link>
            <Link to="/newsnowball">New Snowball</Link>
            <Link to="/allsnowballs">All Snowballs</Link>
            <Link to="/login" className="right">Sign In</Link>
            <Link to="/newuser" className="right">Sign Up</Link>
        </div>
    )
}

export default Navbar
