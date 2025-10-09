// /src/components/ProjectCard.jsx

import React from 'react';
import { FiDownload, FiChevronRight } from 'react-icons/fi';

// Componente da "Barra" de Status atualizado
const ProgressStatus = ({ percentage }) => {
  // Define as classes de cor com base na porcentagem
  let colorClasses = {
    bg: 'bg-gray-100',
    text: 'text-gray-600',
    border: 'border-gray-400', // Cor da borda
  };

  if (percentage > 0 && percentage < 50) {
    colorClasses = {
      bg: 'bg-red-100',
      text: 'text-red-600',
      border: 'border-red-500',
    };
  } else if (percentage >= 50 && percentage < 75) {
    colorClasses = {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      border: 'border-orange-400',
    };
  } else if (percentage >= 75) {
    colorClasses = {
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
      border: 'border-yellow-400',
    };
  }

  return (
    // Div sem 'rounded', com borda inferior de 4px e cor dinâmica
    <div className={`w-full h-7 flex items-center pl-3 border-b-4 ${colorClasses.bg} ${colorClasses.border}`}>
      <span className={`text-sm font-bold ${colorClasses.text}`}>
        {percentage}%
      </span>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm min-w-[280px] flex-shrink-0 border border-gray-200 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-md text-gray-800 uppercase tracking-wider">{project.name}</h3>
          <FiChevronRight className="text-gray-400 cursor-pointer" size={20} />
        </div>

        <div className="mb-4">
          <ProgressStatus percentage={project.progress} />
        </div>

        <div className="text-sm text-gray-500 space-y-2 mb-4">
          <div className="flex justify-between"><span>Horas trabalhadas</span> <span className="font-semibold text-gray-800">{project.workedHours}h</span></div>
          <div className="flex justify-between"><span>Data de início</span> <span className="font-semibold text-gray-800">{project.startDate}</span></div>
          <div className="flex justify-between"><span>Data de término</span> <span className="font-semibold text-gray-800">{project.endDate}</span></div>
        </div>
      </div>

      <div>
        <hr className="my-3 border-t border-gray-200"/>
        <div className="text-sm text-gray-500 flex justify-between mb-4">
            <span>Horas necessárias</span> 
            <span className="font-semibold text-gray-800">{project.totalHours}h</span>
        </div>
        <button className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-semibold">
          <FiDownload className="mr-2" />
          Baixar relatório
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;