import React from 'react';
import projects from '../data/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {  
  return (
    <section className="lg:px-32 px-14 py-16" id="projects">
      <h1 className="text-white text-center text-3xl font-bold underline decoration-purple-500 pb-8">PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        {projects.map((project) => (
          <div className="bg-love-50 rounded-lg shadow-lg p-6" key={project.id}>
            <img src={project.image} alt={project.title} className="h-36 w-full object-cover rounded-md mb-4" />
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <div>
                {project.link && (
                  <a href={project.link} className=" hover:text-gray-400">
                    <FaExternalLinkAlt className="inline-block align-middle mr-1" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className="hover:text-gray-400">
                    <FaGithub className="inline-block align-middle" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-500 mb-4">{project.description}</p>
            <div className="mt-4">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-gray-300 text-gray-800 rounded-md border-2 border-sky-800 px-3 py-1 text-sm font-semibold mr-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}