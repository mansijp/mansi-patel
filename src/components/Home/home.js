import React from 'react';
import './home.css';
import MansiPatel from '../../img/mansi-patel.png';

const Home = () => {
    return (
        <section id="home">
            <div className="home-content">
                <span className="hello">Hello,</span><br/>
                <span className="intro">I'm <span className="name">Mansi Patel</span></span><br/>
                <hr className="line"/>
                <p className="intro-text">
                    I am a Software Engineer passionate about full-stack development,
                    cloud computing, and mobile application development.
                </p>
            </div>
            <img src={MansiPatel} alt="Mansi Patel" className="profile" />
        </section>
    )
}

export default Home;