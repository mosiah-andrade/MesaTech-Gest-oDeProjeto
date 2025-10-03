// /src/Home.js

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProjectList from '../components/ProjectList';
import CollaboratorList from '../components/CollaboratorList';

function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto">
          <ProjectList />
          <CollaboratorList />
        </main>
      </div>
    </div>
  );
}

export default Home;