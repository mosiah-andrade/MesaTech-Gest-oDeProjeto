// /src/components/ProjectList.js

import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/mockData';

const ProjectList = () => {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Projetos em andamento</h2>
        <a href="#" className="text-sm font-semibold text-blue-600">Visualizar tudo</a>
      </div>
      <div className="flex space-x-6 pb-4 overflow-x-auto">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {/* Adiciona um elemento invisível para garantir o espaçamento final no scroll */}
        <div className="flex-shrink-0 w-1"></div> 
      </div>
    </section>
  );
};

export default ProjectList;