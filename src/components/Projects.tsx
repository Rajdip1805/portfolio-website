import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import cryptoHubImage from '../assets/crypto.png';

const projects = [
  {
    title: 'Stock Market Prediction',
    description: 'Stock price predicting LSTM-based model to predict stock prices using historical data with accuracy of above 70%. Optimize hyperparameters using Adam optimizer and tracking training loss across epochs reducing loss by 15%',
    image: 'https://miro.medium.com/v2/resize:fit:626/0*SaNg8uUaKCMQSS5g.jpg',
    link: 'https://github.com/Rajdip1805/Stock-market-Prediction',
    github: 'https://github.com/Rajdip1805/Stock-market-Prediction',
    tech: ['Python', 'AI/ML', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn'],
  },
  {
    title: 'CryptoHub',
    description: 'A collaborative task management application with real-time updates. Includes features like task assignment, progress tracking, and team collaboration tools.',
    image: cryptoHubImage,
    link: 'https://cryptohubexplorer.netlify.app/',
    github: 'https://github.com/Rajdip1805/CryptoHub',
    tech: ['React', 'TailwindCSS', 'CoinGecko API'],
  },
  {
    title: 'AI Chatbot',
    description: 'An intelligent chatbot that uses natural language processing to understand and respond to user queries. It uses a neural network to generate responses based on the users input.',
    image: 'https://news.cornell.edu/sites/default/files/styles/story_thumbnail_xlarge/public/2024-07/robot-1280x720_0.jpg?itok=AF6MakCq',
    link: 'https://github.com/Rajdip1805/AI-chatbot',
    github: 'https://github.com/Rajdip1805/AI-chatbot',
    tech: ['Python', 'Tensorflow', 'TFLearn', 'JSON'],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-6">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 w-full"
      >
        Featured Projects
      </motion.h2>
      <div className="space-y-16 sm:space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative grid md:grid-cols-12 gap-4 md:gap-8 items-center"
          >
            <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} order-1 mb-6 md:mb-0`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-lg transition-all duration-300 group-hover:bg-transparent"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} order-2`}>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{project.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full group hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:shadow-md cursor-default"
                    whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 group px-3 py-1 rounded-lg transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors group-hover:animate-bounce" />
                  <span className="text-sm sm:text-base">Code</span>
                </motion.a>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 group px-3 py-1 rounded-lg transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-5 h-5 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors group-hover:animate-bounce" />
                  <span className="text-sm sm:text-base">Live Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;