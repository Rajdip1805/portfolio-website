import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, FileText, Code } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Text animation variants
  const headingText = "Hi, I'm Rajdip";
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    hover: (i: number) => ({
      y: Math.sin(i) * 8,
      color: `hsl(${210 + i * 15}, 100%, 50%)`,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        repeat: 0,
        repeatType: "mirror" as const,
      },
    }),
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6">
      <div className="text-center w-full max-w-4xl mx-auto pt-16">
        <motion.div
          className="relative mb-12 inline-block w-full"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onTapStart={() => setIsHovered(true)}
          onTap={() => setTimeout(() => setIsHovered(false), 500)}
        >
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur-xl"
            animate={{ 
              opacity: isHovered ? 0.3 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex justify-center items-center overflow-visible h-24 md:h-32 w-full">
            <div className="inline-flex justify-center">
              {headingText.split("").map((letter, i) => (
                <motion.span
                  key={`letter-${i}`}
                  className="text-4xl sm:text-6xl md:text-8xl font-bold text-blue-600 inline-block"
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  custom={i}
                  style={{ 
                    display: 'inline-block',
                    paddingBottom: '0.2em',
                    lineHeight: '1.1',
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto"
        >
          Recent graduate with a passion for building exceptional digital experiences that make the web a better place.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-blue-500 dark:text-blue-400 mb-8 font-medium tracking-wider hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 hover:tracking-widest hover:scale-105"
        >
          DSA | C++ | ML | SQL | MERN
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <a
            href="https://github.com/Rajdip1805"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="hidden md:inline">GitHub</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajdiprajput18/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span className="hidden md:inline">LinkedIn</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://leetcode.com/u/raaj1805/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <Code className="w-6 h-6" />
            <span className="hidden md:inline">LeetCode</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://drive.google.com/file/d/1x982v5dqZfgI2QhzDAuvhSKuXQgYTufE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <FileText className="w-6 h-6" />
            <span className="hidden md:inline">Resume</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero