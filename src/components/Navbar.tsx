import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1x982v5dqZfgI2QhzDAuvhSKuXQgYTufE/view?usp=sharing', '_blank', 'noopener,noreferrer');
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Connect', id: 'contact' },
    { label: 'Resume', id: 'resume', isExternal: true }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-[#0a192f]/80 backdrop-blur-sm z-50 py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-blue-600"
        >
          R
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.isExternal ? openResume : () => scrollToSection(item.id)}
              className={`text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                item.isExternal ? 'flex items-center space-x-1' : ''
              }`}
            >
              {item.label}
              {item.isExternal && <FileText className="w-4 h-4 ml-1" />}
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-[#0a192f]/95 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.isExternal ? openResume : () => scrollToSection(item.id)}
                  className={`text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                    item.isExternal ? 'flex items-center space-x-1' : ''
                  }`}
                >
                  {item.label}
                  {item.isExternal && <FileText className="w-4 h-4 ml-1" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;