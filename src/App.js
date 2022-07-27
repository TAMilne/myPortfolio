import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/about'
import Education from './components/education';
import Experience from './components/experience';
import Skills from './components/skills';
import Interests from './components/interests';
import Contact from './components/contact';
import self from './img/self.jpg'


function App() {
  return (
    <Router>
      <div className="App">
        <div className='menu'>
          <img src={self} className='selfie'></img>
          <h2>Travis Milne</h2>
          <ul className="list">
            <li><Link to="/" style ={{textDecoration: 'none', color: 'white'}}>About</Link></li>
            <li><Link to="/education" style ={{textDecoration: 'none', color: 'white'}}>Education</Link></li>
            <li><Link to="/experience" style ={{textDecoration: 'none', color: 'white'}}>Experience</Link></li>
            <li><Link to="/skills" style ={{textDecoration: 'none', color: 'white'}}>Skills</Link></li>
            <li><Link to="/interests" style ={{textDecoration: 'none', color: 'white'}}>Interests</Link></li>
            <li><Link to="/contact" style ={{textDecoration: 'none', color: 'white'}}>Contact</Link></li>
          </ul>
        </div>
        <Routes className="body">
          <Route default exact path='/' element={< About />}></Route>
          <Route exact path='/education' element={< Education />}></Route>
          <Route exact path='/experience' element={< Experience />}></Route>
          <Route exact path='/skills' element={< Skills />}></Route>
          <Route exact path='/interests' element={< Interests />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
