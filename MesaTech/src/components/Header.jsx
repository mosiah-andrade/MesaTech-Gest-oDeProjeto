// /src/components/Header.jsx

import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';
// A importação do logo é removida daqui

const Header = () => {
  // As props isOpen e toggle são removidas
  return (
    <header className="bg-white p-4 flex justify-between items-center  bg-primary-red w-full shadow-sm">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-xl">
        <FiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Pesquise colaboradores e projetos"
          className="bg-gray-50 border border-gray-200 rounded-md pl-12 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-red"
        />
      </div>

      {/* Ícones e Perfil */}
      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-gray-800 relative">
          <FiBell size={24} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <div className="flex items-center space-x-3">
          <img src="https://i.pravatar.cc/150?img=10" alt="Admin" className="w-10 h-10 rounded-full" />
          <span className="font-semibold text-white hidden md:block">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;