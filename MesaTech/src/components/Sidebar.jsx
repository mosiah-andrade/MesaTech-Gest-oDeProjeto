import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  FiUsers, 
  FiDownload, 
  FiPlus,
  FiGrid,
  FiChevronLeft,
  FiMenu,
  FiHome // 1. Importe o ícone de Home
} from 'react-icons/fi';
import logo from '../assets/logo.svg'; 


const Sidebar = ({ isOpen, toggle, onAddCollaboratorClick, onAddProjectClick = () => {} }) => {
  const location = useLocation();
  const { pathname } = location;

  const linkClasses = "flex items-center p-3 text-gray-700 rounded-md hover:bg-gray-100 transition-colors w-full text-left";
  const activeLinkClasses = "flex items-center p-3 text-white bg-primary-red rounded-md shadow-md w-full text-left";

  return (
    <aside className={`bg-white h-screen flex flex-col justify-between shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-20' }`}>
      <div>
        <div className={`bg-primary-red p-5 flex items-center mb-10 ${isOpen ? 'justify-between' : 'justify-center'}`}>
          {isOpen && (
            <img src={logo} alt="MesaTech Logo" className="h-8" />
          )}
          <button onClick={toggle} className="text-white hover:text-gray-800">
            {isOpen ? <FiChevronLeft size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        <nav className="flex flex-col space-y-3 p-4">
          <button onClick={onAddProjectClick} className={linkClasses}>
            <FiPlus size={24} className="text-gray-600"/>
            {isOpen && <span className="ml-4 font-semibold">Adicionar projeto</span>}
          </button>
          <button onClick={onAddCollaboratorClick} className={linkClasses}>
            <FiPlus size={24} className="text-gray-600"/>
            {isOpen && <span className="ml-4 font-semibold">Adicionar colaborador</span>}
          </button>
          
          <hr className="my-2" />
          
          {/* 2. Adicione o novo link para a Home */}
          <Link to="/" className={pathname === '/' ? activeLinkClasses : linkClasses}>
            <FiHome size={22} />
            {isOpen && <span className="ml-4 font-semibold">Home</span>}
          </Link>
          
          {/* 3. Atualize o link de Colaboradores */}
          <Link to="/colaboradores" className={pathname === '/colaboradores' ? activeLinkClasses : linkClasses}>
            <FiUsers size={22} />
            {isOpen && <span className="ml-4 font-semibold">Colaboradores</span>}
          </Link>
          
          <Link to="/projetos" className={pathname === '/projetos' ? activeLinkClasses : linkClasses}>
            <FiGrid size={22} />
            {isOpen && <span className="ml-4 font-semibold">Projetos</span>}
          </Link>
        </nav>
      </div>
      
      <div className="flex flex-col space-y-3 p-4">
        <a href="#" className={linkClasses}>
          <FiDownload size={22} />
          {isOpen && <span className="ml-4 font-semibold">Baixar relatório</span>}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;