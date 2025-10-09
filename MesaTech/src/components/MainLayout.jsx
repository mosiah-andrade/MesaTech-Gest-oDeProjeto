import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Importante: para renderizar as páginas filhas
import Sidebar from './Sidebar';
import Header from './Header';
import ModalCadastrarColaborador from './ModalCadastrarColaborador';
import ModalCadastrarProjeto from './ModalCadastrarProjeto';

function MainLayout() {
  // 1. Toda a lógica de estado agora vive aqui
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isCollaboratorModalOpen, setCollaboratorModalOpen] = useState(false);
  const [isProjectModalOpen, setProjectModalOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  
  const handleOpenCollaboratorModal = () => setCollaboratorModalOpen(true);
  const handleCloseCollaboratorModal = () => setCollaboratorModalOpen(false);

  const handleOpenProjectModal = () => setProjectModalOpen(true);
  const handleCloseProjectModal = () => setProjectModalOpen(false);

  return (
    <div className="flex h-screen bg-main-bg font-sans">
      {/* 2. A Sidebar sempre recebe as props corretas */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggle={toggleSidebar} 
        onAddCollaboratorClick={handleOpenCollaboratorModal}
        onAddProjectClick={handleOpenProjectModal}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        {/* 3. <Outlet /> renderiza a página da rota atual (Home, Projetos, etc.) */}
        <Outlet />
      </div>

      {/* 4. Os modais são renderizados aqui e funcionarão em qualquer página */}
      {isCollaboratorModalOpen && <ModalCadastrarColaborador onClose={handleCloseCollaboratorModal} />}
      {isProjectModalOpen && <ModalCadastrarProjeto onClose={handleCloseProjectModal} />}
    </div>
  );
}

export default MainLayout;