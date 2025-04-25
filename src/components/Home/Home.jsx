import React from 'react'
import avatarImg from '../../assets/avatar.png'
import TextChange from '../../TextChange.jsx'
const Home = () => {
  return (
    <div className="text-white flex w-fill justify-between items-start p-10 md:p-20 ">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter"><TextChange/></h1>
            <p className="text-xsm md:text-2xl tracking-tight ">
            I build scalable, secure web applications with Java, Spring Boot, React.js, and MySQL. Passionate about clean code and user-centric design, I’m always ready to solve complex problems and collaborate on exciting projects.            </p>
            <button className="mt-5 md:m-10 text-white py-2 px-3 text-sm md:text-lg md:p-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
      </div>
      <div>
        <img  src={avatarImg} alt="" />
      </div>
    </div>
  )
}

export default Home
