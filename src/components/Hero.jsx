import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import img from "../assets/1763615496088.jpg"

const Hero = () => {
    return (
        <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6 ,ease:'easeOut'}}
        viewport={{once:true}}
        id='home'
        className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#a1a1a1] via-[#2d2d2d] to-[#1a1a1a]'
        >
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                {/* left side content */}
                <div className='md:w-1/2 mb-10 md:mb-0'>
                <h1 className='text-4xl md:text-6xl font-bold mb-4'>Hi, I'm <span className='text-purple'>Istheak Ahmed</span></h1>
                <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>MERN stack Developer</h2>
                <p className='text-lg text-gray-300 mb-8'>I build modern, responsive, and user-friendly web applications using the MERN stack.</p>
                <div className='flex gap-4'>
                    <a href="#projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Work</a>
                    <a href="#contact" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-500'> contact Me</a>
                </div>
                </div>
            </div>
            {/* right side img */}
            <div className='md:w-1/2 flex justify-center'>
                <div className='relative w-64 h-64 md:w-80 md:h-80'>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink animate-pulse-slow opacity-70'>
                        <motion.img
                        animate={{y:[0,-20,0]}}
                        transition={{duration:4,
                            repeat:Infinity,
                            repeatType:"loop",
                            ease:"easeInOut"
                        }}
                        className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                        src={img} alt="" />
                  </div>

                </div>
            </div>
        </motion.div>
    );
};

export default Hero;