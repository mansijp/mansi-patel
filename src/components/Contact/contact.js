import React from 'react';
import './contact.css';
import email from '../../img/contacts/email-icon.png';
import linkedin from '../../img/contacts/linkedin-icon.png';
import github from '../../img/contacts/github-icon.png';
import devpost from '../../img/contacts/devpost-icon.png';

const Contact = () => {
    return (
        <section id="contact">
            <div className='contact-content'>
                <div className='table-row-contact'>
                    <span className='title'>Get in Touch: </span>
                    <div className='contact-logos'>
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
                    </div>
                    <span className='copyright'>© Mansi Patel 2025</span>
                </div>
            </div>
        </section>
    )
}

export default Contact;