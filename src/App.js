import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import { useRef } from 'react';
import Contact from'./components/Contact';


function App() {
  const projectsRef=useRef(null);
  const aboutRef=useRef(null);
  const contactRef=useRef(null);

  const scrollToSection=(elementRef)=>{
    elementRef.current?.scrollIntoView({
      behavior:'smooth'
    });
  };

  return (
    <div className='bg-black h-[697px]'>
      <Navbar
      onAboutClick={() => scrollToSection(aboutRef)}
      onProjectsClick={() => scrollToSection(projectsRef)}
      onContactClick={() => scrollToSection(contactRef)}/>
      <Hero/>
      <div ref={aboutRef} id="about">
      <About/>
      </div>
      <div ref={projectsRef} id="projects">
        <Projects/>
      </div>
      <div ref={contactRef} id="contact">
        <Contact/>
      </div>
      
      
    </div>
  );
}

export default App;
