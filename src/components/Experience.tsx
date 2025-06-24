import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Example Tech",
      period: "2022 - Present",
      description: [
        "Led development of key features resulting in 40% increase in user engagement",
        "Implemented responsive design patterns and optimized performance",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc",
      period: "2020 - 2022",
      description: [
        "Developed and maintained multiple React-based web applications",
        "Improved application load time by 60% through optimization techniques",
        "Mentored junior developers and conducted code reviews"
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="w-6 h-6 text-blue-500" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {exp.title}
              </h3>
              <p className="text-blue-500 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 