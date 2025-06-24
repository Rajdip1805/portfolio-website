import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-[#0a192f]' : 'bg-white'}`}>
      <div className="fixed top-0 left-0 right-0 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none"></div>
      <Navbar />
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-20 md:right-4 p-2 rounded-full bg-white dark:bg-[#0a192f] shadow-lg z-50 backdrop-blur-sm"
        onClick={toggleTheme}
      >
        {darkMode ? <Sun className="w-6 h-6 text-blue-500" /> : <Moon className="w-6 h-6 text-blue-500" />}
      </motion.button>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="education"><Education /></div>
        <div id="contact"><Contact /></div>
      </div>
    </div>
  );
}

export default App;