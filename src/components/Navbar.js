import React from "react";
import Logo from "../assests/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} alt="Logo" />
        <Link to="/"> Home </Link>
        <Link to="/create">Create Blogs</Link>
        <Link to="/blog">Blogs</Link>
        <button className="loginButton">
          <Link to="/login">Log in</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

