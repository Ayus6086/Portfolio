import React from 'react';
import { motion } from 'framer-motion';
import Full_Stack_Developer from '../assets/Full_Stack_Developer.png';
import core_java from '../assets/core_java.png';
import python_ml from '../assets/python_ml.png';
const certificates = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Linkedin',
    date: '2023',
    image: 'https://drive.google.com/file/d/1NWWYLEbkOlXyxvIYc5MbRrb6Q01_mi-W/view',
    image2: Full_Stack_Developer,
  },
  {
    title: 'Core Java Programming',
    issuer: 'Cipherschools',
    date: '2024',
    image: 'https://drive.google.com/file/d/1Jz_PQnzUFlSOiEr2wL9UWxOiKdkvaLey/view',
    image2: core_java,
  },
  {
    title: 'Python, Data Science Machine Learning Integrated',
    issuer: 'Cipherschools',
    date: '2024',
    image: 'https://www.cipherschools.com/certificate/preview?id=67a6f9dcb6e0846f5a505f88',
    image2: python_ml,
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="w-[90%] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Certificates</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <img
                src={certificate.image2}
                alt={certificate.title}
                className="w-full h-40 object-cover object-top"
                style={{ borderBottom: '1px solid #4B5563' }}
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                <div className="flex justify-between text-gray-400 mb-2">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                </div>
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors text-center"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 