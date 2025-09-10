import React from 'react'
import { Github, ExternalLink } from 'lucide-react';
import { image } from 'framer-motion/client';


const ProjectCrad = () => {
    const projects = [
  {
    title: "Project Alpha",
    description: "A sleek and modern web application built with a focus on user experience and minimalist design principles.",
    image: "",
    codeLink: "#",
    liveLink: "#"
  },
  {
    title: "Project Beta",
    description: "An innovative data visualization tool that turns complex datasets into simple, interactive charts and graphs.",
    image: "",
    codeLink: "#",
    liveLink: "#"
  },
  {
    title: "Project Gamma",
    description: "A dynamic portfolio showcase designed to highlight creative work with smooth animations and a responsive layout.",
    image:"",
    codeLink: "#",
    liveLink: "#"
  }
];
  return (
    <div className="min-h-screen bg-white text-blck py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-black rounded-2xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105 duration-300 border border-gray-800"
            >
              {/* Project Image */}
              <img 
                className="w-full h-48 object-cover object-center" 
                src={project.image} 
                alt={project.title} 
              />
              
              <div className="p-6">
                {/* Project Title */}
                <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">
                  {project.title}
                </h2>
                
                {/* Project Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 border border-gray-700 hover:border-blue-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-blue-600/10"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 border border-gray-700 hover:border-green-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-green-600/10"
                  >
                    <ExternalLink size={20} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCrad
