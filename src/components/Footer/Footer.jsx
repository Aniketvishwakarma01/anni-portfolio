import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
const Footer = () => {
  return (
    <div id="Footer" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
      <div>
        <h1 className="text-2xl md:text-6xl font-bold ">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal ">Feel Free To reach out!</h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center"><MdOutlineEmail size={20}/>
        <a href="mailto:sharmaaniket396@gmail.com?subject=Inquiry%20About%20Your%20Services&body=Hello%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20provide%20further%20information%20on%20your%20pricing%20and%20offerings%3F%0A%0AThank%20you.%0A%0ARegards%2C%0A[Your%20Name]">Send Inquiry</a>

        </li>
        <li className="flex gap-1 items-center"><CiLinkedin/>
           <a href=" https://www.linkedin.com/in/aniketvishwakarma-tech">Linkedin.com</a>
        </li>
        <li className="flex gap-1 items-center"><FaGithub/>
           <a href=" https://github.com/Aniketvishwakarma01">gitHub.com</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
