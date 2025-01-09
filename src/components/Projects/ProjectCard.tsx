import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectType } from './types';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white-600">{project.title}</h3>
        <p className="text-white-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.github}
            className="inline-flex items-center text-black-700 hover:text-black-900"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;