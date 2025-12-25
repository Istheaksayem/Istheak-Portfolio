/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import profileImg from "../assets/1763615496088.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        {/* heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>
          About <span className='text-purple'>Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know more about my background and passion
        </p>
      </div>

      {/* image + My journey */}
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center gap-12'>
        {/* image */}
        <div className='md:w-1/2 rounded-2xl overflow-hidden'>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='w-full h-full object-cover'
            src={profileImg}
            alt="profile"
          />
        </div>

        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className='md:w-1/2'
        >
          <div className='rounded-2xl p-8'>
            <h3 className='text-2xl font-semibold mb-6'>My journey</h3>

            <p className='text-gray-300 mb-6'>
              My journey into web development started with a deep curiosity about how modern websites are built.
              To turn this curiosity into skills, I enrolled in the Programming Hero web development course,
              where I learned the fundamentals of HTML, CSS, JavaScript, and gradually moved into React
              and other modern technologies.
            </p>

            <p className='text-gray-300 mb-12'>
              Through hands-on projects and continuous practice at Programming Hero, I have been building
              real-world applications and improving my problem-solving abilities. Currently, I am focusing
              on becoming a MERN-stack developer using technologies like Node.js, Express, and MongoDB,
              with a strong passion for learning and growing every day.
            </p>

            {/* cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
            >
              {/* Card 1 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className='bg-dark-300 rounded-xl p-6 border border-white/10 hover:border-purple transition'
              >
                <h4 className='text-xl font-semibold mb-2 text-purple'>Experience</h4>
                <p className='text-gray-400 text-sm'>
                  6 month + learning and building projects with modern web technologies.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className='bg-dark-300 rounded-xl p-6 border border-white/10 hover:border-purple transition'
              >
                <h4 className='text-xl font-semibold mb-2 text-purple'>Projects</h4>
                <p className='text-gray-400 text-sm'>
                  Built multiple full-stack projects using React, Node.js & MongoDB.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className='bg-dark-300 rounded-xl p-6 border border-white/10 hover:border-purple transition'
              >
                <h4 className='text-xl font-semibold mb-2 text-purple'>Skills</h4>
                <p className='text-gray-400 text-sm'>
                  HTML, CSS, Tailwind, JavaScript, React, Express, MongoDB.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className='bg-dark-300 rounded-xl p-6 border border-white/10 hover:border-purple transition'
              >
                <h4 className='text-xl font-semibold mb-2 text-purple'>Learning</h4>
                <p className='text-gray-400 text-sm'>
                  Currently focusing on MERN stack & advanced React concepts.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
