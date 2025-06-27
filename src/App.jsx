import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hamburger from './components/Hamburger';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { Contact } from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
