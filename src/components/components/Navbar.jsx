import React, { useState } from 'react';
import logo from '@/assets/assets/logo.svg';
import close from '@/assets/assets/close.svg';
import menu from '@/assets/assets/menu.svg';
import { navLinks } from '@/constants/index.js';

const Navbar = () => {
  const [active,setactive] = useState(null);
  const [Toggle,setToggle] = useState(false);
  return (
    <nav className="fixed justify-between top-0 w-full z-40 bg-[rgba(10,10,0,8)] backdrop-blur-lg border-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">   
        {/* Logo and Brand Name */}
        <div className="px-4 flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-12" />     
          <p className="font-bold text-2xl bg-gradient-to-r from-red-400 to-orange-900 bg-clip-text text-transparent">
            Shoaib Ul Hassan
          </p> 
        </div>  

        {/* Navigation Links */}
        <ul className="hidden gap-12 sm:flex pr-5">
          {navLinks.map((link,id) => (
           <li key={id} className="group relative cursor-pointer font-bold text-white"
           onClick={()=>setactive(link.title)}>
                  <a href={`#${link.id}`} className={`relative pb-1 after:block after:absolute after:bottom-0 after:left-1/2 
                    after:w-0 after:h-[4px] after:bg-blue-600 after:transition-all after:duration-300 after:opacity-0 
                    group-hover:after:w-full group-hover:after:left-0 group-hover:after:opacity-100`}>
                    {link.title}
                 </a>
            </li>
           ))}
        </ul>
        {/* Mobile Menue   */}
         <div className='sm:hidden'>
          <img src={Toggle ? close :menu}
          className='pr-5 font-bold text-2xl cursor-pointer'
          onClick={()=>setToggle(!Toggle)}
          />
          
         </div>
         <ul className={`${Toggle ? "flex flex-col right-10" : "right-[-7.5rem]"}
         top-20  gap-6 p-5 black-gradient absolute rounded-2xl  transition-all duration-300`}>
          {navLinks.map((link,id) => (
           <li key={id} className="group relative cursor-pointer  text-white"
           onClick={()=>setactive(link.title)}>
                  <a href={`#${link.id}`} className={`relative pb-1 after:block after:absolute 
                  after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-blue-600 
                  after:transition-all after:duration-300 after:opacity-0 group-hover:after:w-full 
                  group-hover:after:left-0 group-hover:after:opacity-100`}
                   onClick={()=>setToggle(false)}
                   >
                    {link.title}
                 </a>
            </li>
           ))} 
        </ul>        
      </div>   
    </nav>   
  );
}

export default Navbar;
