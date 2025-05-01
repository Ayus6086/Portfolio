import React from 'react';
import { motion } from 'framer-motion';
import tripPlannerImg from '../assets/tripPlannerImg.png';
import chatbotImg from '../assets/chatbotImg.jpg';
import portfolioImg from '../assets/portfolioImg.png';

const projects = [
  {
    title: 'AI Trip Planner',
    description: 'An AI-powered travel planner offering smart, personalized trip suggestions with a sleek, responsive UI',
    technologies: ['HTML', 'CSS', 'React', 'JavaScript'],
    image: tripPlannerImg,
  },
  {
    title: 'AI Chatbot',
    description: 'An AI chatbot enhancing user engagement by 40% through optimized multi-turn conversations and an intuitive UI',
    technologies: ['Python', 'Gemini API', 'NLP'],
    image: chatbotImg,
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with smooth animations',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: portfolioImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-800 text-white">
      <div className="w-[90%] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title + ' screenshot'}
                className="w-full h-48 object-cover object-top"
                style={{ borderBottom: '1px solid #4B5563' }}
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 