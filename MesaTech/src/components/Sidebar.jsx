// /src/components/Sidebar.js

import React from 'react';
import { FiUsers, FiFolder, FiDownload, FiPlus, FiChevronLeft, FiAlignJustify } from 'react-icons/fi';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`bg-white h-screen p-4 flex flex-col justify-between shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div>
        <div className="flex items-center justify-between mb-10">
          {isOpen && <h1 className="text-xl font-bold text-gray-800">LOGO</h1>}
          <button onClick={toggle} className="text-gray-500 hover:text-gray-800">
            {isOpen ? <FiChevronLeft size={24} /> : <FiAlignJustify size={24} />}
          </button>
        </div>
        
        <nav className="flex flex-col space-y-2">
          <a href="#" className="flex items-center p-2 text-gray-700 bg-gray-100 rounded-md">
            <FiPlus size={20} />
            {isOpen && <span className="ml-4 font-semibold">Adicionar colaborador</span>}
          </a>
          <a href="#" className="flex items-center p-2 text-white bg-blue-600 rounded-md shadow-md">
            <FiUsers size={20} />
            {isOpen && <span className="ml-4 font-semibold">Colaboradores</span>}
          </a>
          <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <FiFolder size={20} />
            {isOpen && <span className="ml-4 font-semibold">Projetos</span>}
          </a>
        </nav>
      </div>
      
      <div>
        <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
          <FiDownload size={20} />
          {isOpen && <span className="ml-4 font-semibold">Baixar relatório</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;