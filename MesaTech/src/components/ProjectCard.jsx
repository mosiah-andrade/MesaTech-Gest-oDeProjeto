// /src/components/ProjectCard.js

import React from 'react';
import { FiDownload } from 'react-icons/fi';

const ProgressBar = ({ percentage }) => {
  let bgColor = 'bg-red-500';
  if (percentage >= 25 && percentage < 75) {
    bgColor = 'bg-yellow-400';
  } else if (percentage >= 75) {
    bgColor = 'bg-green-500';
  }

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className={`${bgColor} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md min-w-[280px] flex-shrink-0">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800">{project.name}</h3>
        <span className="text-gray-400 cursor-pointer">&gt;</span>
      </div>

      <div className="mb-2">
        <span className="text-sm font-semibold">{project.progress}%</span>
        <ProgressBar percentage={project.progress} />
      </div>

      <div className="text-sm text-gray-600 space-y-2 mb-4">
        <div className="flex justify-between"><span>Horas trabalhadas</span> <span className="font-semibold">{project.workedHours}h</span></div>
        <div className="flex justify-between"><span>Data de início</span> <span className="font-semibold">{project.startDate}</span></div>
        <div className="flex justify-between"><span>Data de término</span> <span className="font-semibold">{project.endDate}</span></div>
        <hr className="my-2"/>
        <div className="flex justify-between"><span>Horas necessárias</span> <span className="font-semibold">{project.totalHours}h</span></div>
      </div>

      <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold">
        <FiDownload className="mr-2" />
        Baixar relatório
      </button>
    </div>
  );
};

export default ProjectCard;