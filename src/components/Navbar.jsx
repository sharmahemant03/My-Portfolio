import React from 'react'
import Logo from '../assets/Logo.png'
import HemantSharma from '../assets/HemantSharma.pdf'

const Navbar = ({ onAboutClick, onProjectsClick, onContactClick }) => {
  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to your resume file (replace with your actual resume path)
    link.href =HemantSharma;
    
    // Set the download attribute with the desired filename
    link.download = 'Hemant-Sharma-Resume.pdf';
    link.target = '_blank';
    // Append to the body, click programmatically, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='h-24 bg-black z-50 flex items-center font-mono sticky top-0 ' >
        <div className='flex items-center  sm:ml-auto lg:ml-60 space-x-5'>
           <img src="https://cdn-icons-png.flaticon.com/128/560/560277.png" alt="" className='w-12 h-12'/>
            <h6 className='font-bold lg:text-4xl text-white text-xl sm:w- cursor-default'>Hemant<br className='lg:hidden' /> Sharma</h6>
        </div>
        <div className='flex items-center space-x-9 text-white items mx-auto'>
           
            <a href="#" className='hover:text-[#0FFF50] hover:underline text-xl  hidden lg:block '  onClick={onAboutClick} >About</a>
            <a href="#" className='hover:text-[#0FFF50] hover:underline text-xl hidden lg:block' onClick={onProjectsClick} >Projects</a>
            <a href="#" className='hover:text-[#0FFF50] hover:underline text-xl hidden lg:block' onClick={onContactClick} >Contact</a>
            <button onClick={handleResumeDownload} className='w-40 hover:scale-105 ease-out  h-12 rounded-3xl shadow-lg bg-[#0FFF50] text-black font-semibold '>Download Resume</button>
        </div>
     
    </div>
  )
}

export default Navbar
