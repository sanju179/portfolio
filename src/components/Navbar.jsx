import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  return (<nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        {/* <img className='mx-2 w-10' src={logo} alt="logo"/> */}
    </div>
    <div className='m-8 flex items-center justify-center justify-between gap-4 text-2xl'>
        <a href="https://in.linkedin.com/in/sanjeevinirakesh" target='_blank' rel="noopener noreferrer">
        <FaLinkedin /></a>
        
        <a href ="https://github.com/sanju179" target="_blank" rel="noopener noreferrer">
  <FaGithub size={24} color="#fff" />
</a>
        <a href ="mailto:sanjeevinir17@outlook.com">
  <HiOutlineMail size={24} color="#fff" />
</a>
    </div>
  </nav>
  )
}

export default Navbar