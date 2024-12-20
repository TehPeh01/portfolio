import React from "react";
import '../styles/intro.css';
import '../styles/global.css';
import { Link } from "react-scroll";

const Intro = () => {
    return (

            <article class="about active" data-page="about">
                <header>
                <h2 class="h2 article-title">About me</h2>
                </header>

                <section class="about-text">
                <p>
                    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
                    I enjoy
                    turning complex problems into simple, beautiful and intuitive designs.
                </p>

                <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive.
                    Moreover, I
                    add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
                    across your
                    message and identity in the most creative way. I created web design for many famous brand companies.
                </p>
                </section>


                <section class="service">
                <h3 class="h3 service-title">What i'm doing</h3>

                <ul class="service-list">

                    <li class="service-item">
                    <div class="service-icon-box">
                        <img src="./assets/images/icon-design.svg
                        " alt="design icon" width="40" />
                    </div>

                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Web design</h4>
                        <p class="service-item-text">
                        The most modern and high-quality design made at a professional level.
                        </p>
                    </div>
                    </li>

                    <li class="service-item">

                    <div class="service-icon-box">
                        <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
                    </div>

                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Web development</h4>
                        <p class="service-item-text">
                        High-quality development of sites at the professional level.
                        </p>
                    </div>
                    </li>

                    <li class="service-item">
                    <div class="service-icon-box">
                        <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40" />
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Mobile apps</h4>
                        <p class="service-item-text">
                        Professional development of applications for iOS and Android.
                        </p>
                    </div>
                    </li>

                    <li class="service-item">
                    <div class="service-icon-box">
                        <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" />
                    </div>

                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Photography</h4>
                        <p class="service-item-text">
                        I make high-quality photos of any category at a professional level.
                        </p>
                    </div>
                    </li>
                </ul>
                </section>
            </article>

    )
}

export default Intro