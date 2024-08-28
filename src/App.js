import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home />
        <About />
        <Contact />
    </div>
  );
}

export default App;
