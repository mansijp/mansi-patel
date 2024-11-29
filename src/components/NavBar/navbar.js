import React, { useState } from 'react';
import './navbar.css';
import logo from '../../img/logo.png';
import resumeWhite from '../../img/resume-white.png';
import resumeBlack from '../../img/resume-blue.png';

const Navbar = () => {
  const [resumeIcon, setResumeIcon] = useState(resumeWhite);

  const handleMouseEnter = () => {
    setResumeIcon(resumeBlack);
  };

  const handleMouseLeave = () => {
    setResumeIcon(resumeWhite);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menuItems">
        <p className="menuItem">Home</p>
        <p className="menuItem">About</p>
        <p className="menuItem">Experience</p>
        <p className="menuItem">Skills</p>
        <p className="menuItem">Projects</p>
        <p className="menuItem">Education</p>
        <p className="menuItem">Contact</p>
      </div>

      <div className="resumeBtnContainer">
        <button className="resumeBtn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={resumeIcon} alt="Resume icon" className="resumeBtnImg" />
          <span className="resumeBtn-content">Resume</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;