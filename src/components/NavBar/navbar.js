import React from 'react';
import './navbar.css';
import logo from '../../img/logo.png';
import resume from '../../img/resume-white.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="menuItems">
                <Link className="menuItem">Home</Link>
                <Link className="menuItem">About</Link>
                <Link className="menuItem">Experience</Link>
                <Link className="menuItem">Skills</Link>
                <Link className="menuItem">Projects</Link>
                <Link className="menuItem">Education</Link>
                <Link className="menuItem">Contact</Link>
            </div>

            <div className="resumeBtnContainer">
                <button className="resumeBtn">
                    <img src={resume} alt="Resume icon" className="resumeBtnImg" /><span className="resumeBtn-content">Resume</span></button>
            </div>
        </nav>
    )
}

export default Navbar;