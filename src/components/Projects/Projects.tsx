//import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-white-600 text-center mb-12 max-w-2xl mx-auto">
          A collection of projects showcasing my expertise in full-stack applications and System Design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white-600">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-md bg-white-800"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
