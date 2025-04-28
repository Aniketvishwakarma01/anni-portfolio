import React, { useState } from 'react';
import avatarImg from '../../assets/avatar.png';
import TextChange from '../../TextChange.jsx';
import RegistrationForm from '../RegistrationForm/RegistrationForm.jsx';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter mb-1">
          <TextChange />
        </h1>
        <p className="text-xs md:text-2xl tracking-tight">
          I develop scalable, secure web applications using Java, Spring Boot, React.js, and MySQL, with a strong focus on clean code and user-centered design.
        </p>
        <button
          className="mt-5 md:m-10 text-white py-2 px-3 text-sm md:text-lg md:p-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => setShowForm(true)}
        >
          Contact Me
        </button>
      </div>
      <div>
        <img src={avatarImg} alt="" />
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-80  relative max-h-[500px] overflow-auto">
            <button
              onClick={() => setShowForm(false)} // Close form on cross button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600"
            >
              &times;
            </button>
            <div className="text-gray-800 p">
              <RegistrationForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
