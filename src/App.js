import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
