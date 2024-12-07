import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../img/logo.png';
import resumeWhite from '../../img/navbar/resume-white.png';
import resumeBlack from '../../img/navbar/resume-blue.png';
import menuIcon from '../../img/navbar/menu.png';
import LightSetting from '../../img/light-setting.png';
import { HashLink } from 'react-router-hash-link';
import resume from '../../pages/Mansi_Patel.pdf';

const Navbar = ({setIsNight, isNight}) => {
    const [resumeIcon, setResumeIcon] = useState(resumeWhite);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnter = () => {
      setResumeIcon(resumeBlack);
    };

    const handleMouseLeave = () => {
      setResumeIcon(resumeWhite);
    };

    const handleResumeClick = () => {
      window.open(resume, '_blank');
    }

    const [top, setTop] = useState(!window.scrollY);

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    const handleLightClick = () => {
      setIsNight(!isNight);
    };

  return (
    <section className="navbar">
      <HashLink smooth to="/#home">
        <img src={logo} alt="Logo" className="logo" />
      </HashLink>
      
      <div className={`menuItems ${isMenuOpen ? 'active' : ''}`}>
        <HashLink smooth to="/#home" className="menuItem">Home</HashLink>
        <HashLink smooth to="/#about" className="menuItem">About</HashLink>
        <HashLink smooth to="/#experience" className="menuItem">Experience</HashLink>
        <HashLink smooth to="/#skills" className="menuItem">Skills</HashLink>
        <HashLink smooth to="/#projects" className="menuItem">Projects</HashLink>
        <HashLink smooth to="/#education" className="menuItem">Education</HashLink>
        <HashLink smooth to="/#contact" className="menuItem">Contact</HashLink>
      </div>

      <div className="menuContainer">
        <button className="menuBtn" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu icon" className="menuBtnImg" />
        </button>
      </div>

      <div className="resumeBtnContainer">
        <button className="resumeBtn" onClick={handleResumeClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={resumeIcon} alt="Resume icon" className="resumeBtnImg" />
          <span className="resumeBtn-content">Resume</span>
        </button>
      </div>

      <div className="lightContainer">
          <img src={LightSetting} alt="Light setting icon" className={isNight ? 'night' : 'day'} onClick={handleLightClick}/>
      </div>
    </section>
  );
};

export default Navbar;