import React, { useState } from "react";
import './about.css';
import webdev from '../../img/about/webdev.png';
import hackathons from '../../img/about/hackathon.png';
import ai from '../../img/about/emotiondetection.png';
import enlarge from '../../img/about/enlarge.png';

const About = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const handleImageClick = (imageName) => {
        setEnlargedImage(imageName === enlargedImage ? null : imageName);
    };

    const handleClose = () => {
        setEnlargedImage(null);
    };

    return (
        <section id="about">
            <div className="about-container">
                <p className="about-me-title">More About Me</p>
                <div className="about-content">
                    
                    <p className="about-me-description">
                        I am a Computer Engineering (BEng.) graduate from the Toronto Metropolitan University and specialized in Software Engineering.
                        <br/><br/>
                        As an enthusiastic problem-solver, I am consistently improving upon Java, Python, and JavaScript. 
                        Web development is a field that I am currently exploring through frameworks including Spring, 
                        ReactJS and FastAPIs. I also have a growing curiosity in Artificial Intelligence, AI document-processing, 
                        and computer vision. 
                        <br/><br/>
                        Aside from my interest in technology, I always have time for my hobbies. I make piano covers on YouTube 
                        and transcribe songs into sheet music. I also love to work on my problem-solving skills at hackathons 
                        and meet individuals! There’s also always an ebook with me whenever I’m on-the-go!
                    </p>

                    <div className="line-container"><i id="enlarge-instruct">Click image to enlarge!</i></div><hr id="line-break" />
                    
                    <div className="table-row-about">
                        <div className="table-column-about">
                            <span className="interest-title">AI & Computer Vision</span><br/>
                            <span className="interest-text">My interest in Deep Learning and Computer Vision is constantly growing. I like to explore these topics through school projects, interesting courses, and participating in relevant opportunities at co-ops or internships.</span>
                            <div className="image-container">
                                <img src={ai} alt="AI" className={`interest-image ${enlargedImage === 'ai' ? 'enlarged' : ''}`} onClick={() => handleImageClick('ai')} />
                                <img src={enlarge} alt="Enlarge Icon" className="enlarge-image" onClick={() => handleImageClick('ai')} />
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="table-column-about">
                            <span className="interest-title">Web Development</span><br/>
                            <span className="interest-text">As someone who enjoys to see the finished product after a lot of dedication, web development is one of my most rewarding hobbies. I aim to add as many web dev technologies to my portfolio as I can!</span>
                            <div className="image-container">
                                <img src={webdev} alt="Web Development" className={`interest-image ${enlargedImage === 'webdev' ? 'enlarged' : ''}`} onClick={() => handleImageClick('webdev')} />
                                <img src={enlarge} alt="Enlarge Icon" className="enlarge-image" onClick={() => handleImageClick('webdev')}/>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="table-column-about">
                            <span className="interest-title">Hackathons</span><br/>
                            <span className="interest-text">I enjoy learning new technology from other people and through unique experiences. I have participated in 10+ hackathons and won a few, notably RBC's Next Great Innovator hackathon and IBZ's Infobesity Challenge.</span>
                            <div className="image-container">
                                <img src={hackathons} alt="Hackathons" className={`interest-image ${enlargedImage === 'hackathons' ? 'enlarged' : ''}`} onClick={() => handleImageClick('hackathons')} />
                                <img src={enlarge} alt="Enlarge Icon" className="enlarge-image" onClick={() => handleImageClick('hackathons')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {enlargedImage && (
                <div className="full-screen-overlay" onClick={handleClose}>
                    <div className="full-screen-image-container" onClick={(e) => e.stopPropagation()}>
                        <img src={enlargedImage === 'ai' ? ai : enlargedImage === 'webdev' ? webdev : hackathons} alt="Enlarged" className="full-screen-image"/>
                        <button className="close-button" onClick={handleClose}><b>X</b></button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;