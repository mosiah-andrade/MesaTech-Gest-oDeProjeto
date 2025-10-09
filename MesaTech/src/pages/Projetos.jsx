// /src/pages/Projetos.jsx

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FiChevronDown, FiCalendar, FiUserPlus, FiPlus } from 'react-icons/fi';

// Dados de exemplo para a página
const projectData = {
  name: 'Shadow',
  iconColor: 'text-purple-500',
  workedHours: '207h',
  progress: 50,
  startDate: '05/07/2025',
  endDate: '10/02/2026',
  collaborators: [
    { id: 1, name: 'Lucas Andrade Soares', role: 'Product Owner', avatar: 'https://i.pravatar.cc/150?img=5', tasks: { 'Set. 1 - Set. 6': { hours: '18h', title: 'Definir e priorizar o backlog do produto' } } },
    { id: 2, name: 'Mariana Costa Nogueira', role: 'Scrum Master', avatar: 'https://i.pravatar.cc/150?img=6', tasks: { 'Set. 7 - Set. 13': { hours: '2h', title: 'Facilitar cerimônias ágeis' }, 'Set. 14 - Set. 20': { hours: '2h', title: 'Apoiar na melhoria contínua do time' }, 'Set. 21 - Set. 27': { hours: '2h', title: 'Acompanhar métricas de produtividade' } } },
    { id: 3, name: 'Carolina Martins Figueiredo', role: 'Designer de UX/UI', avatar: 'https://i.pravatar.cc/150?img=3', tasks: { 'Set. 1 - Set. 6': { hours: '4h', title: 'Criar wireframes e protótipos de baixa fidelidade' }, 'Set. 21 - Set. 27': { hours: '15h', title: 'Desenvolver design system e manter a consistência visual' } } },
    { id: 4, name: 'Beatriz Oliveira Ramos', role: 'Desenvolvedor Backend', avatar: 'https://i.pravatar.cc/150?img=1', tasks: { 'Set. 7 - Set. 13': { hours: '8h', title: 'Desenvolver APIs e serviços RESTful' }, 'Set. 14 - Set. 20': { hours: '10h', title: 'Criar e gerenciar banco de dados' } } },
  ]
};

const weekHeaders = ['Set. 1 - Set. 6', 'Set. 7 - Set. 13', 'Set. 14 - Set. 20', 'Set. 21 - Set. 27', 'Set. 28 - Set. 30'];

function Projetos() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-main-bg font-sans">
      
      <div className="flex-1 flex flex-col overflow-hidden">
        

        {/* Conteúdo Principal da Página de Projetos */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Cabeçalho do Projeto */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white p-2 rounded-md shadow-sm">
                <FiChevronDown className={projectData.iconColor} size={24} />
                <h1 className="text-2xl font-bold text-gray-800">{projectData.name}</h1>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-700">{projectData.workedHours}</span>
                <div className="w-48 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-orange-400 h-2.5 rounded-full" style={{ width: `${projectData.progress}%` }}></div>
                </div>
                <span className="font-semibold text-gray-700">{projectData.progress}%</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center text-sm bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
                <FiUserPlus size={16} className="mr-2"/> Adicionar colaborador
              </button>
              <button className="flex items-center text-sm bg-primary-red text-white px-4 py-2 rounded-md hover:bg-red-700">
                <FiPlus size={16} className="mr-2"/> Criar tarefa
              </button>
            </div>
          </div>

          {/* Filtros e Calendário */}
          <div className="flex justify-between items-center mb-4">
            <input 
              type="text"
              placeholder="Pesquisar colaborador ou cargo"
              className="border border-gray-300 rounded-md px-4 py-2 w-72"
            />
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-sm bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
                <FiCalendar size={16} className="mr-2"/> Setembro <FiChevronDown size={16} className="ml-2"/>
              </button>
              <div className="flex space-x-2 text-sm">
                <span className="p-2 rounded-md">D</span>
                <span className="p-2 rounded-md bg-red-200 text-red-800 font-bold">S</span>
                <span className="p-2 rounded-md">M</span>
              </div>
              <div className="text-sm text-gray-600">
                <span>Data de início: <strong>{projectData.startDate}</strong></span>
                <span className="ml-4">Data de Término: <strong>{projectData.endDate}</strong></span>
              </div>
            </div>
          </div>

          {/* Tabela/Cronograma do Projeto */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
            <div className="min-w-[1200px]">
              {/* Cabeçalho da Tabela */}
              <div className="grid grid-cols-12 text-left text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">
                <div className="col-span-3 p-4">Colaborador</div>
                {weekHeaders.map(week => (
                  <div key={week} className="col-span-2 p-4">{week}</div>
                ))}
              </div>

              {/* Corpo da Tabela */}
              <div>
                {projectData.collaborators.map(collab => (
                  <div key={collab.id} className="grid grid-cols-12 border-b border-gray-100 last:border-b-0">
                    <div className="col-span-3 p-4 flex items-center">
                      <img src={collab.avatar} alt={collab.name} className="w-10 h-10 rounded-full object-cover mr-4" />
                      <div>
                        <p className="font-semibold text-gray-800">{collab.name}</p>
                        <p className="text-sm text-gray-500">{collab.role}</p>
                      </div>
                    </div>
                    {weekHeaders.map(week => (
                      <div key={week} className="col-span-2 p-2">
                        {collab.tasks[week] ? (
                           <div className="bg-gray-100 p-2 rounded-md h-full">
                             <div className="flex justify-between items-center mb-1">
                               <p className="text-xs text-gray-500">Estimativa: {collab.tasks[week].hours}</p>
                             </div>
                             <p className="text-sm text-gray-800 font-semibold">{collab.tasks[week].title}</p>
                           </div>
                        ) : (
                          <div className="h-full"></div> // Célula vazia
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Projetos;