import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

// Define types for skills and certificates
interface SkillItem {
  name: string;
  logo: string;
}

interface Certificate {
  institute: string;
  name: string;
  logo: string;
  link: string;
}

const skillCategories: {title: string; skills: SkillItem[]}[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'HTML/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Google Colab', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/1200px-Google_Colaboratory_SVG_Logo.svg.png' }
    ],
  },
];

// Sample certificate data - replace with your actual certificates
const certificates: Certificate[] = [
  {
    institute: 'Coursera',
    name: 'Machine Learning Specialization',
    logo: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-logo-square.png?auto=format%2Ccompress&dpr=1',
    link: 'https://coursera.org/share/5e095e1e331fa30bf97463152796ca42'
  },
  {
    institute: 'Infosys Springboard',
    name: 'Python for Data Science',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOTPhI8DViu-YL1a3-4oQ7xXmQowoYT6ekw&s',
    link: 'https://drive.google.com/file/d/1f5jMOUwDybhWBzCmpDpGs6P29_OI-KIR/view?usp=sharing'
  },
  {
    institute: 'Hackerrank',
    name: 'SQL',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png',
    link: 'https://www.hackerrank.com/certificates/6f33b8c8ce3d'
  },
  {
    institute: 'Great Learning',
    name: 'ReactJS Tutorial',
    logo: 'https://cdn.brandfetch.io/iddg--Bdhe/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1739921564157',
    link: 'https://drive.google.com/file/d/1djpWHAt8WJbxHu96sGyYwU2V1Ukn17vW/view?usp=drive_link'
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-20 px-4 sm:px-6">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 w-full"
      >
        Skills
      </motion.h2>
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">{category.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-md transition-all duration-300"
                >
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                  <img src={cert.logo} alt={cert.name} className="w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <p className="text-blue-500 dark:text-blue-400 font-medium text-sm">{cert.institute}</p>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{cert.name}</h4>
                  <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills