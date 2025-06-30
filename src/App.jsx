import React from 'react';
import './App.scss';

// Layout Components
import Navigation from './components/layout/Navigation/Navigation';
import Footer from './components/layout/Footer/Footer';

// Section Components
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Education from './components/sections/Education/Education';
import Experience from './components/sections/Experience/Experience';
import OpenSource from './components/sections/OpenSource/OpenSource';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import Skills from './components/sections/Skills/Skills';

// Hooks
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  const { activeSection, isVisible } = useScrollAnimation();

  return (
    <div className="app">
      <Navigation activeSection={activeSection} />
      
      <main className="main-content">
        <Hero isVisible={isVisible.home} />
        <About isVisible={isVisible.about} />
        <Skills isVisible={isVisible.skills}/>
        <Education isVisible={isVisible.education} />
        <Experience isVisible={isVisible.experience} />
        <OpenSource isVisible={isVisible.opensource} />
        <Projects isVisible={isVisible.projects} />
        <Contact isVisible={isVisible.contact} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;