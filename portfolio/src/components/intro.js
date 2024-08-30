import React from "react";
import './intro.css';
import bg from '../assets/tenz.png';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Intro = () => {
    return (
        <section id="intro">
            <h1>About Me</h1>
            <div className="intro-container">
                <img src={bg} alt="mePic" className="mePic" />
                <div className="introContent">
                    <span className="hello">Hi, </span>
                    <span className="introText">it's <span className="name">Teh.</span><br />I am a Software Developer</span>
                    <p className="introPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link><button className="btn">RESUME</button></Link>
                    <div className="social-icons">
                        <a href="#" className="linkedin">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="#" className="github">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="#" className="instergram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro