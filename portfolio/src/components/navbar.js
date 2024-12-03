import React from "react";
import '../styles/navbar.css';
import '../styles/global.css';
import { Link } from 'react-scroll';
 
const Navbar = () => {
    return (

        <nav class="navbar">
            <ul class="navbar-list">
              <li class="navbar-item">
                <a href="intro.html">
                  <button class="navbar-link  active" data-nav-link>About</button>
                </a>
              </li>

              <li class="navbar-item">
                <a href="resume.html">
                  <button class="navbar-link" data-nav-link>Resume</button>
                </a>
              </li>

              <li class="navbar-item">
                <a href="portfolio.html">
                  <button class="navbar-link" data-nav-link>Portfolio</button>
                </a>
              </li>

              <li class="navbar-item">
                <a href="contact.html">
                  <button class="navbar-link" data-nav-link>Contact</button>
                </a>        
              </li>
            </ul>
        </nav>

    )
}

export default Navbar