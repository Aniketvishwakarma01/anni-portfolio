import React from 'react'
import AboutImg from '../../assets/about.png'
import { IoArrowForward } from 'react-icons/io5'
const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black 
    shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12" >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold"> About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
            <img className="md:h-80" src={AboutImg} alt="About img" />
            <ul>
                <div className="flex gap-3 py-4 ">
                    <IoArrowForward size={30} className="mt-1"/>
                <span className="w-96">
                    <h1 className="text-xl md:text-2xl font-semibold leading-normal pb-2">&#128640; Full Stack Java Developer</h1>
                    <p className="text-sm md:text-md leading-tight">
                        <ul>
                            <li className="list-disc">🔧 Proficient in building full-stack solutions using Java, Spring Boot, React.js, MySQL, and RESTful APIs</li><br />
                            <li className="list-disc">💻 Strong grasp of software architecture principles, including OOP, MVC, microservices, and clean code practices</li><br />
                            <li className="list-disc">🎯 Experienced in designing intuitive, responsive UIs with React, Bootstrap, and Tailwind</li><br />
                            <li className="list-disc">💡 Skilled in backend engineering, database schema design, authentication flows, and data security best practices</li><br />
                            <li className="list-disc">🛠️ Comfortable with version control using Git, GitHub, and dependency management with Maven</li><br />
                            <li className="list-disc">🧩 Adept at debugging, optimization, and enhancing performance for seamless user experiences</li><br />
                            <li className="list-disc">📈 Passionate about continuous learning, exploring new technologies, and applying innovative solutions to complex problems</li><br />
                            <li className="list-disc">🤝 Adept collaborator with exceptional communication skills, thriving in agile environments and consistently delivering innovative, solution-driven results.</li>
                        </ul>
                    </p>
                </span>
                </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
