import React from 'react'
import Ecommerce from '../assets/Ecommerce.png';
import MyPortfolio from '../assets/MyPortfolio.png';
import { motion } from 'framer-motion';
import Spotify from '../assets/Spotify.png';

const Projects = () => {
  return (
    <div className='w-full lg:h-[699px]  bg-black lg:pl-60 pl-3 font-mono'>
      <p className='font-semibold text-5xl text-[#0FFF50]  pt-20'>Projects</p>
      <p className='lg:text-xl  text-white mt-4 lg:w-3/4 text-sm'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
      <div className='grid lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 grid-cols-2 mt-28 text-center xs:ml-20 gap-3'>
        <a href="https://fashion-fold.vercel.app/" target="_blank"
          rel="noopener noreferrer">

          <div className="group w-64 h-64 shadow-[0_0_30px_10px_rgba(255,255,255,0.2)] border border-gray-700 bg-gray-900 rounded-lg overflow-hidden text-white">
            <motion.div
              className="group w-64 h-64 bg-gray-900 rounded-lg overflow-hidden text-white"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={Ecommerce} className="w-full h-32 object-cover" alt="Portfolio Website" />
              <div className="p-2">
                <p className="text-xl font-normal text-[#0FFF50]">E-Commerce Website</p>
                <p className="text-sm mt-1 mb-1">
                  Developed responsive front-end using React for a seamless user experience.
                </p>
              </div>
            </motion.div>
          </div>
        </a>

        <div className="group w-64 h-64 bg-gray-900 shadow-[0_0_30px_10px_rgba(255,255,255,0.2)] border border-gray-700 rounded-lg overflow-hidden text-white">
          <motion.div
            className="group w-64 h-64 bg-gray-900 rounded-lg overflow-hidden text-white"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={MyPortfolio} className="w-full h-32 object-cover" alt="Portfolio Website" />
            <div className="p-2">
              <p className="text-xl font-normal text-[#0FFF50]">Portfolio Website</p>
              <p className="text-sm mt-1 mb-1">
                Developed a responsive portfolio website using React, showcasing projects and skills with modern UI/UX.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="group w-64 h-64 bg-gray-900 shadow-[0_0_30px_10px_rgba(255,255,255,0.2)] border border-gray-700 rounded-lg overflow-hidden text-white">
          <motion.div
            className="group w-64 h-64 bg-gray-900 rounded-lg overflow-hidden text-white"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={Spotify} className="w-full h-32 object-cover" alt="Portfolio Website" />
            <div className="p-2">
              <p className="text-xl font-normal text-[#0FFF50]">Spotify Clone</p>
              <p className="text-sm mt-1 mb-1">
              Developed a Spotify clone with React, featuring music streaming and sleek UI.              </p>
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  )
}

export default Projects
