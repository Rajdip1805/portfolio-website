import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'BTech in Information Technology',
    school: 'Vishwakarma Institute of Information Technology, Pune',
    year: '2020-2024',
    description: 'CGPA: 9.02',
  },
  {
    degree: 'Higher Secondary Education',
    school: 'J.S. Jamadar Junior College, Thalner',
    year: '2019',
    description: 'Percentage: 84.30%',
  },
  
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" ref={ref} className="py-16 sm:py-20 px-4 sm:px-6">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12 w-full"
      >
        Education
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-6 sm:mb-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/80 dark:hover:bg-gray-800/80 group"
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-blue-500 group-hover:scale-110 transition-transform" />
              {edu.degree}
            </h3>
            <p className="text-sm sm:text-base text-blue-500 dark:text-blue-400 mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors flex items-center">
              <Award className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
              {edu.school}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-1 sm:mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
              {edu.year}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors pl-6">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;