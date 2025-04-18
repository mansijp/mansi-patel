import React from 'react';
import './home.css';
import MansiPatel from '../../img/home/mansi.png';

const Home = () => {
    return (
        <section id="home">
            <div className="home-container">
                <div className="home-content">
                    <span className="hello">Hello,</span><br/>
                    <span className="intro">I'm <span className="name">Mansi Patel</span></span><br/>
                    <hr id="line"/>
                    <p className="intro-text">
                        I am a Software Engineer with a passion in Full-Stack Development, DevOps,
                        Cloud Computing, and Mobile App Development.
                    </p>
                </div>
                <div className="profile-container">
                    <a href="https://linkedin.com/in/mansijp" target="_blank" rel="noreferrer">
                        <img src={MansiPatel} alt="Mansi Patel" className="profile" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
