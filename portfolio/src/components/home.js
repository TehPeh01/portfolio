import React from "react";
import './home.css';
import bg from '../assets/tenz.png';

const Home = () => {
    return (
        <section id="home">
            <div className="port-txt-container">
                <div className="top-port-txt-container">
                    <div className="top-port-txt">PORTFOLIO</div>
                </div>
                <div className="bot-port-txt-container">
                    <div className="bot-port-txt">PORTFOLIO</div>
                    <div className="bot-port-txt">PORTFOLIO</div>
                    <div className="bot-port-txt">PORTFOLIO</div>
                </div>
                <div className="home-img-container">
                    <img src={bg} alt="home-img" className="home-img" />
                </div>
            </div>
            <div className="info-container">
                <div className="div-box"></div>
            </div>
        </section>    
    )
}

export default Home