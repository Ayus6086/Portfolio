import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: '2023',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'React Advanced Concepts',
    issuer: 'Coursera',
    date: '2023',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Node.js Certification',
    issuer: 'LinkedIn Learning',
    date: '2022',
    image: 'https://via.placeholder.com/300x200',
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
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                <div className="flex justify-between text-gray-400">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 