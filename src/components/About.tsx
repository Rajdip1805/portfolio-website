import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 mx-auto"
        >
          About Me
        </motion.h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
          A Software Developer with experience in Python, C++, DSA, and Machine Learning. A tech enthusiast who is passionate about coding, problem solving and learning new technologies. Open to exciting opportunities in software development!
        </p>
      </motion.div>
    </section>
  );
};

export default About; 