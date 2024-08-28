import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Skills from "./components/Skills/skills";
import Achievements from './components/Achievements/achievements';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
    </div>
  );
}

export default App;
