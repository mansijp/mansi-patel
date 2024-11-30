import React from 'react';
import './contact.css';
import email from '../../img/email-icon.png';
import linkedin from '../../img/linkedin-icon.png';
import github from '../../img/github-icon.png';
import devpost from '../../img/devpost-icon.png';

const Contact = () => {
    return (
        <section id="contact">
            <div className='contact-content'>
                <div className='table-row-contact'>
                    <div className='table-column-contact'><span id='contact-title'>Get in Touch: </span></div>
                    <div className='table-column-contact'>
                        <a href="mailto:mansijpatel321@gmail.com"><img className='contact' src={email} alt="Email" /></a>
                    </div>
                    <div className='table-column-contact'>
                        <a href="https://www.linkedin.com/in/mansijp/" target="_blank" rel="noreferrer"><img className='contact' src={linkedin} alt="LinkedIn" /></a>
                    </div>
                    <div className='table-column-contact'>
                        <a href="https://github.com/mansijp" target="_blank" rel="noreferrer"><img className='contact' src={github} alt="GitHub" /></a>
                    </div>
                    <div className='table-column-contact'>
                        <a href="https://devpost.com/mansijp" target="_blank" rel="noreferrer"><img className='contact' src={devpost} alt="Devpost" /></a>
                    </div>
                    <div className='table-column-contact'>
                        <span className='copyright'>© Mansi Patel 2024</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;