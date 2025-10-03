// /src/components/CollaboratorList.js

import React from 'react';
import { collaborators } from '../data/mockData';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

const CollaboratorList = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Colaboradores disponíveis</h2>
        <a href="#" className="text-sm font-semibold text-blue-600">Visualizar tudo</a>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Cabeçalho da Lista */}
        <div className="grid grid-cols-12 gap-4 text-left text-sm font-semibold text-gray-500 px-4 py-2 border-b">
          <div className="col-span-4">Nome</div>
          <div className="col-span-2">Matrícula</div>
          <div className="col-span-2">Cargo</div>
          <div className="col-span-2">Horas disponíveis</div>
          <div className="col-span-2 text-center">Ações</div>
        </div>
        {/* Itens da Lista */}
        <div className="divide-y divide-gray-100">
          {collaborators.map(collab => (
            <div key={collab.id} className="grid grid-cols-12 gap-4 items-center px-4 py-3 hover:bg-gray-50">
              <div className="col-span-4 flex items-center">
                <img 
                  src={collab.avatar} 
                  alt={collab.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <span className="font-semibold text-gray-800">{collab.name}</span>
              </div>
              <div className="col-span-2 text-gray-600">{collab.matricula}</div>
              <div className="col-span-2 text-gray-600">{collab.cargo}</div>
              <div className="col-span-2 text-gray-600">{collab.horasDisponiveis} horas</div>
              <div className="col-span-2 flex items-center justify-center space-x-2">
                <button className="flex items-center text-sm bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  <FiPlus className="mr-1"/> Atribuir projeto
                </button>
                <button className="text-gray-500 hover:text-blue-600 p-1"><FiEdit size={18}/></button>
                <button className="text-gray-500 hover:text-red-600 p-1"><FiTrash2 size={18}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaboratorList;