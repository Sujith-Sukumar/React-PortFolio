import About from './about/about';
import './App.css';
import Contact from './contact/contact';
import Edu from './edu/edu';
import Navbar from './navbar/navbar';
import Project from './project/project';
import Skills from './skills/skills';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Edu />
      <Contact />
    </div>
  );
}

export default App;
