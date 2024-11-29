import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

//All pages
import Home from "./components/Home/home";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
