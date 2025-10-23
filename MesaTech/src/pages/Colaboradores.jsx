import React, { useState } from 'react';
import { collaborators } from '../data/mockData';
import { FiPlus, FiEdit, FiTrash2, FiFilter } from 'react-icons/fi';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// Componente de lista de colaboradores adaptado para esta página
const CollaboratorTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      {/* Cabeçalho da Tabela */}
      <div className="flex text-left text-xs font-semibold text-gray-500 uppercase px-6 py-4 border-b border-gray-200">
        <div className="w-4/12">Nome</div>
        <div className="w-2/12">Matrícula</div>
        <div className="w-2/12">Cargo</div>
        <div className="w-1/12">Horas disponíveis</div>
        <div className="w-3/12 text-center">Ações</div>
      </div>

      {/* Corpo da Tabela */}
      <div>
        {collaborators.map(collab => (
          <Link to={`colaboradoresPerfil/id:${collab.id}`}  key={collab.id} className="flex items-center px-6 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50" >
            <div className="w-4/12 flex items-center">
              <img 
                src={collab.avatar} 
                alt={collab.name} 
                className="w-10 h-10 rounded-full object-cover mr-4" 
              />
              <span className="font-semibold text-gray-800">{collab.name}</span>
            </div>
            <div className="w-2/12 text-gray-600">{collab.matricula}</div>
            <div className="w-2/12 text-gray-600">{collab.cargo}</div>
            <div className="w-1/12 text-gray-600">{collab.horasDisponiveis} horas</div>
            <div className="w-3/12 flex items-center justify-center space-x-2">
              <button className="flex items-center text-sm border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-100">
                <FiPlus size={16} className="mr-1"/> Atribuir projeto
              </button>
              <button className="text-gray-500 hover:text-blue-600 p-1"><FiEdit size={18}/></button>
              <button className="text-gray-500 hover:text-red-600 p-1"><FiTrash2 size={18}/></button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


function Colaboradores() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="flex h-screen bg-main-bg font-sans">
            
      <div className="flex-1 flex flex-col overflow-hidden">
       

        <main className="flex-1 p-8 overflow-y-auto">
          {/* Cabeçalho da página de Colaboradores */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Colaboradores</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold text-gray-700">Total: {collaborators.length}</span>
              <button className="flex items-center text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100">
                <FiFilter size={16} className="mr-2" />
                Filtrar
              </button>
            </div>
          </div>

          {/* Tabela de Colaboradores */}
          <CollaboratorTable />
        </main>
      </div>

      {/* O modal continua sendo controlado por esta página */}
      {isModalOpen && <ModalCadastrarColaborador onClose={handleCloseModal} />}
    </div>
  );
}

export default Colaboradores;