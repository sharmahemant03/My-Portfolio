import React from "react";
import { FaStar, FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import ComputerCanvas from "./canvas/Computers";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-transparent text-white h-[599px] leading-none font-mono w-full relative">
      {/* Text Section */}
      <div className="relative z-10 lg:ml-64 mt-16 lg:mt-0 flex flex-col items-center lg:items-start">
        <p className="lg:text-5xl text-xl transform transition-transform duration-500 ease-in-out hover:translate-x-10 cursor-default">
          Hello I'm
        </p>
        <p className="text-[#0FFF50] text-[4rem] lg:text-[5rem] transform transition-transform duration-500 ease-in-out hover:translate-x-10 cursor-default text-center lg:text-left">
          Hemant<br />Sharma
        </p>
        <p className="w-80 lg:w-96 leading-normal text-3xl transform transition-transform duration-500 ease-in-out hover:translate-x-10 cursor-default text-center lg:text-left">
          A Software Engineer
        </p>
        <div className="flex items-center mt-4">
          <FaStar className="text-[#0FFF50] text-2xl" />
          <div className="bg-[#0FFF50] w-40 lg:w-52 h-[2px] ml-2"></div>
        </div>
        <div className="flex items-center cursor-pointer space-x-4 text-3xl mt-4">
          <a
            href="https://github.com/sharmahemant03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/reachout-hemant"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/sharmahemant03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare />
          </a>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="w-full lg:w-[60%] h-[150px] lg:h-[500px] lg:mt-0">
        <ComputerCanvas />
      </div>

      {/* Motion Component */}
      <div className="absolute bottom-6 lg:bottom-10 left-0  right-0 flex justify-center">
        <a href="#about">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <MdKeyboardDoubleArrowDown className="text-5xl" />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
