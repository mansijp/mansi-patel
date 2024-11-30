import React from "react";
import './education.css';
import uni from '../../img/tmu.jpg';

const Education = () => {
    return (
        <section id="education">
            <div className="education-container">
                <div className="education-content">
                    <div className="education-logo-container">
                        <img src={uni} alt="University Logo" className="education-logo" />
                    </div>

                    <div className="education-text-container">
                        <p className="education-title">Computer Engineering, B.Eng</p>
                        <p className="education-subtitle">Toronto Metropolitan University <i>(formerly Ryerson University)</i></p>
                        <p className="education-description">
                            <b><u>Courses:</u></b> Computer Vision, Digital Systems Engineering, Software Project Management, Computer Networks, Intelligent Systems
                            <br/><b><u>Activities:</u></b> Computer Representative - RECESS, Operations Committee - RESS
                        </p>
                        <p className="education-duration">Expected Graduation: May 2025</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
