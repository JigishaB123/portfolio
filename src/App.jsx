import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';

// Layout
import Navigation from './components/layout/Navigation/Navigation';
import Footer from './components/layout/Footer/Footer';

// Sections
import Hero from './components/sections/Hero/Hero';
import Trajectory from './components/sections/Trajectory/Trajectory';
import About from './components/sections/About/About';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';
import Contact from './components/sections/Contact/Contact';

// UI
import CommandPalette from './components/ui/CommandPalette/CommandPalette';
import Toast from './components/ui/Toast/Toast';

// Hooks
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  const { activeSection } = useScrollAnimation();
  const [paletteOpen, setPaletteOpen] = useState(false);

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  // Deep links (e.g. /#projects): the browser tries to jump before React has
  // rendered the sections, so scroll once after mount.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  // ⌘K / Ctrl+K toggles the command palette
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="app">
      <Navigation activeSection={activeSection} onOpenPalette={openPalette} />

      <main className="main-content">
        <Hero />
        <Trajectory />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
      <Toast />
    </div>
  );
}

export default App;
