import React from 'react';
import './home.css';
import MansiPatel from '../../img/home/mansi.jpg';

const Home = () => {
    return (
        <section id="home">
            <div className="home-container">
                <div className="home-content">
                    <span className="hello">Hello,</span><br/>
                    <span className="intro">I'm <span className="name">Mansi Patel</span></span><br/>
                    <hr id="line"/>
                    <p className="intro-text">
                        I am a Software Engineer with a passion in full-stack development, DevOps,
                        cloud computing, and mobile app development.
                    </p>
                </div>
                <div className="profile-container">
                    <img src={MansiPatel} alt="Mansi Patel" className="profile" />
                </div>
            </div>
        </section>
    );
};

export default Home;
