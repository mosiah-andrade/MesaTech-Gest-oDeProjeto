// /src/components/Header.js

import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center w-full">
      <div className="relative">
        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Pesquisar colaboradores e projetos"
          className="bg-gray-50 border border-gray-200 rounded-md pl-10 pr-4 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-gray-800 relative">
          <FiBell size={24} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <div className="flex items-center space-x-2">
          <img src="https://i.pravatar.cc/150?img=10" alt="Admin" className="w-10 h-10 rounded-full" />
          <span className="font-semibold text-gray-700">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;