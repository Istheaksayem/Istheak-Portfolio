/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img from "../assets/1763615496088.jpg";

const colors = [
  "text-green-500",
  "text-purple-500",
  "text-pink-500",
  "text-blue-500",
  "text-yellow-400",
];

const Hero = () => {
  const text = "MERN Stack Developer";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
        setColorIndex((prev) => (prev + 1) % colors.length);
      }, 1500);

      return () => clearTimeout(reset);
    }
  }, [index, text]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#796969] via-[#2d2d2d] to-[#1a1a1a] overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-3/4 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple">Istheak Ahmed</span>
          </h1>

          {/* Typewriter with dynamic color */}
          <h2
            className={`text-xl sm:text-2xl md:text-4xl font-semibold mb-6 ${colors[colorIndex]}`}
          >
            {displayText}
            <span className="border-r-2 border-white ml-1 animate-pulse"></span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            I build modern, responsive, and user-friendly web applications using
            the MERN stack.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-5 py-2 sm:px-6 sm:py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2 sm:px-6 sm:py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/4 flex justify-center">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink animate-pulse opacity-70" />

            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="relative rounded-full w-full h-full object-cover z-10"
              src={img}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
