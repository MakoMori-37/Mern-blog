import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <div className="box1">
        <Link to='/' >

          <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjRbibgkZGGA6KyEAfVPJ7pE3-xYe29z6-UA&usqp=CAU'  alt='' />
        
        </Link>

      </div>
      <div className="box2">

      <Link to='/' >
        <h3>Home</h3>
      
    </Link>
        
        <Link to='/createblog' >
        
            <h3>Create Blog</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
