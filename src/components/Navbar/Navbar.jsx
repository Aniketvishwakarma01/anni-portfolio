import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 ms:px-20">
      <span className="text-4xl font-bold tracking-wider text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
  AV<span className="text-green-500 inline">.</span>
</span>
        <ul className={`${
            menu?"block":"hidden"
        }    mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none
        text-center md:bg-transparent md:static ms:mx-0 md:flex gap-6`}>
            <a href="#About">    
            <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
            </a>
            <a href="#Experience">
            <li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li>
            </a>
            <a href="#Projects">
            <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
            </a>
            <a href="#Footer">
            <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
            </a>
        </ul>
      {menu? (
        <RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" 
        onClick={()=>
            setMenu(false)
        }/>
      ):(
      <RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300"
    onClick={()=>
      setMenu(true)
    }
    />
  )}
    </nav>
  )
};

export default Navbar
