import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

//All pages
import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Skills from "./components/Skills/skills";
import Projects from './components/Projects/projects';
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <ScrollToTop />
    </Router>
  );
}

export default App;
