import React from "react";
import './about.css';
import placeholder from '../../img/mansi-patel.png';

const About = () => {
    return (
        <section id="about">
            <div className="about-content">
                <span className="about-me-title">More About Me</span>
                <p className="about-me-description">
                    I am a fourth year Computer Engineering student at the Toronto Metropolitan University, specializing in Software 
                    Engineering (B.Eng). As an enthusiastic problem-solver, I am consistently improving upon Java, Python, and JavaScript.
                    Web development is a field that I am currently exploring through frameworks including Spring, AngularJS and React.
                    <br/><br/>
                    I also have a growing curiosity in Artificial Intelligence, specifically generative AI, AI document-processing, and 
                    computer vision. I am interested in the future with AI and aim to get relevant work experience using AI within the 
                    company. 
                    <br/><br/>
                    Aside from my interest in technology, I always have time for my hobbies. I make piano covers on YouTube and 
                    transcribe songs into sheet music. I also love to practice my tech and problem-solving skills during hackathons and 
                    network with other individuals! There’s also always an ebook with me whenever I’m on-the-go! 
                </p>

                <hr className="line" />
                
                <div className="table-row">
                    <div className="table-column">
                        <span className="interest-title">Temp title</span><br/>
                        <span className="interest-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a lacus in sapien mattis fermentum nec id velit.</span>
                        <br/><img src={placeholder} alt="" className="interest-image" />
                    </div>
                    <div className="divider"></div>
                    <div className="table-column">
                        <span className="interest-title">Temp title</span><br/>
                        <span className="interest-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a lacus in sapien mattis fermentum nec id velit.</span>
                        <br/><img src={placeholder} alt="" className="interest-image" />
                    </div>
                    <div className="divider"></div>
                    <div className="table-column">
                        <span className="interest-title">Temp title</span><br/>
                        <span className="interest-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a lacus in sapien mattis fermentum nec id velit.</span>
                        <br/><img src={placeholder} alt="" className="interest-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;