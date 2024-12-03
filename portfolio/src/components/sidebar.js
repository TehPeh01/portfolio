import React from "react";
import '../styles/sidebar.css';
import '../styles/global.css';

const Sidebar = () => {
    return (

        <aside className="sidebar" data-sidebar>
          <div className="sidebar-info">
            <figure className="avatar-box">
              <img src="#" alt="Teh Li Peh" width="80" />
            </figure>
      
            <div className="info-content">
              <h1 className="name" title="Richard hanrick">Teh Li Peh</h1>
              <p className="title">Web developer</p>
            </div>
      
            <button className="info_more-btn" data-sidebar-btn>
              <span>Show Contacts</span>
              <ion-icon name="chevron-down"></ion-icon>
            </button>
          </div>
      
            <div className="sidebar-info_more">
      
            <div className="separator"></div>
      
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
    
                <div className="contact-info">
                  <p className="contact-title">Email</p>     
                  <a href="mailto:tehlipeh@gmail.com" class="contact-link">tehlipeh@gmail.com</a>
                </div>
              </li>

              <li className="contact-item">      
                <div className="icon-box">
                  <ion-icon name="phone-portrait-outline"></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Phone</p>
                  <a href="tel:+9802503887" class="contact-link">+1 (980) 250-3887</a>
                </div>
              </li>
    
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Location</p>
                  <address>Charlotte, NC</address>
                </div>
              </li>
            </ul>
    
            <div className="separator"></div>
    
            <ul className="social-list">
              <li className="social-item">
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
    
              <li className="social-item">
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
    
              <li className="social-item">
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
            </ul>
          </div>    
        </aside> 

    )
}

export default Sidebar