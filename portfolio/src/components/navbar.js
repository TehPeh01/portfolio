import React from "react";
import './navbar.css';
import { Link } from 'react-scroll';
 
const Navbar = () => {
    return (
        <nav id="navbar">
            <div alt="Logo" className="logo">Teh Li Peh</div>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">HOME</Link>
                <Link className="desktopMenuListItem">ABOUT</Link>
                <Link className="desktopMenuListItem">SKILLS</Link>
                <Link className="desktopMenuListItem">PROJECTS</Link>
                <Link className="desktopMenuListItem">CONTACT</Link>
            </div>
        </nav>
    )
}

export default Navbar