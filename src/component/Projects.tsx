//import React from 'react'
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import screen from '../assets/screen.png'


function Projects() {
  const projects = [
  {
    title: "Real-Estate",
    description: "A modern real estate web app where users can browse, search, and view property listings. Built to provide a clean and responsive experience for finding houses, apartments, and land for sale or rent.",
    image: screen, 
    tech: ["React", "Tailwind CSS", "Vercel"], 
    live: "https://real-estate-cc8l.vercel.app", // added https://
    github: "https://github.com/ogbuifesinachi21-ch/real-estate",
  }
];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm tracking-wider">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1120] mt-2">Featured Project</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* PROJECT CARD */}
        <div className="max-w-2xl mx-auto">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white text-sm mb-4">{project.description}</p>
                
                {/* TECH STACK TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0B1120] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
                  >
                    <ExternalLink size={16} /> View Project
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-300 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-500 transition"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects