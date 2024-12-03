import {BrowserRouter as Router} from 'react-router-dom';
import React, { useState } from 'react';

//All pages
import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Skills from "./components/Skills/skills";
import Projects from './components/Projects/projects';
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";

import './App.css';

function App() {
  const [lightSetting, setLightSetting] = useState(false);
  const handleLightSettingChange = (newSetting) => {
    setLightSetting(newSetting);
  };

  return (
    <Router>
      <div className={lightSetting ? 'dark-mode' : 'light-mode'}>
        
        <Navbar setIsNight={handleLightSettingChange} isNight={lightSetting} />

        <div className='home-section'>
          <Home />
        </div>

        <div className='about-section'>
          <About />
        </div>

        <div className='experience-section'>
          <Experience />
        </div>

        <div className='skills-section'>
          <Skills />
        </div>

        <div className='projects-section'>
          <Projects />
        </div>

        <div className='education-section'>
          <Education />
        </div>

        <div className='contacts-section'>
          <Contact />
        </div>

      </div>
    </Router>
  );
}

export default App;
