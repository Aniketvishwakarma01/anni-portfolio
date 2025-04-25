import React from 'react'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold "> Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard title="User Hive" main="User Hive is a React-based web app for seamlessly managing and customizing user profiles with an intuitive interface." />
        <ProjectCard title="Word Audit" main="WordAudit is a React-based web app that analyzes text content for word count, frequency, and other writing metrics to enhance content quality." />
        <ProjectCard title="Netflix Clone" main="Netflix Clone is a React app that mimics Netflix's features, including browsing, searching, and watching movies." />

      </div>
    </div>
  )
}

export default Projects
