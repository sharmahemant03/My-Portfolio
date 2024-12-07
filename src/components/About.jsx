import React from 'react'
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt,FaGithub,FaDocker, FaHtml5, FaJsSquare,FaBootstrap,FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const technologies = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-5xl" /> },
  { name: "TypeScript", icon:<SiTypescript className="text-blue-600 text-5xl" /> },
  { name: "Tailwindcss", icon: <RiTailwindCssFill className="text-blue-600 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-blue-600 text-5xl" /> },
  { name: "Java", icon: <FaJava className="text-orange-500 text-5xl" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-5xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-white text-5xl" /> },
  { name: "Mongodb", icon: <SiMongodb className="text-green-900 text-5xl" /> },
  { name: "Github", icon: <FaGithub className="text-black text-5xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-600 text-5xl" /> },





];
const About = () => {
  return (
    <div className='bg-black text-white lg:pl-60 pl-5 pt-5 w-full flex flex-col lg:h-[599px] h-[1210px] xs:h-[880px] font-mono'>
        <p className='lg:text-5xl text-3xl font-semibold text-[#0FFF50] '>Introduction</p>
        <p className='lg:text-xl text-sm mt-4 lg:w-3/4'>
        Passionate Full-Stack Developer with expertise in React, Java, Spring Boot, passionate about crafting scalable web applications that blend functionality with seamless UI/UX design. Adept at delivering high-impact solutions through creative problem-solving, attention to detail, and collaborative teamwork. With a strong foundation in both frontend and backend development, I am eager to contribute to cutting-edge projects, drive innovation, and build transformative digital experiences.
          </p>
        <p className='lg:text-3xl font-semibold mt-8 text-[#0FFF50]'>Technologies</p>
        <div className="flex flex-wrap items-center lg:pr-60 justify-center gap-8 mt-10">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="w-24 h-24 flex   items-center justify-center rounded-full bg-gray-900 shadow-lg"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1, // Staggered animation
            duration: 0.1,
            ease: "easeOut",
          }}
        >
          {tech.icon}
        </motion.div>
      ))}
    </div>
    </div>

  )
}

export default About
 