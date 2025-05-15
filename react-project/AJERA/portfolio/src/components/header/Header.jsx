import React from "react";
import {Link} from "react-scroll";
import "./Header.css"

function Header() {

  return (
  <div className="header">
    <div className="h-left">
        <h1> <span> AJERA Agro Export</span></h1>
    </div>

     {/* search bar */}
     {/* Home */}
     {/* about us */}
     {/* contuct us */}
     {/* cart */}
     {/* profile */}
    <div className="h-right">
        <Link to ='about' smooth={true} duration = {500}>
            <h4>About Us</h4>
        </Link>    
        {/* <Link to ='skill' smooth= {true} duration = {500}>
            <h4>Skills</h4>
        </Link>      */}
        <Link to ='pro' smooth= {true} duration = {500}>
            <h4>Project</h4>
        </Link> 
        <Link to ='exp' smooth= {true} duration = {500}>
            <h4>Experience</h4>
        </Link> 
        <Link to ='contact' smooth= {true} duration = {500}>
            <h4>Contact Us</h4>
        </Link> 
        <Link to ='profile' smooth= {true} duration = {500}>
             <h4>Profile</h4>
        </Link>
    </div>
  </div>
  );

}

export default Header;

