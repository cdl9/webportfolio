import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/home';
import About from './Pages/about';
import Skills from './Pages/skills';
import Projects from './Pages/projects';
import Contact from './Pages/contact';



function App() {
  return (
    <div className="App">
        <NavBar/> 
        <div className="section1" id="home">
          <Home/>
        </div>
        <div className="section2" id="about">
          <About/>
        </div>
        <div className="section3" id="skills">
          <Skills/>
        </div>
        <div className="section4" id="projects">
        </div>  
        <div className="section5" id="contact">
          <Contact/>
        </div>      
    </div>
  );
}
export default App;
