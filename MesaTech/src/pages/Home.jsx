// /src/pages/Home.jsx
import React from 'react';
import ProjectList from '../components/ProjectList';
import CollaboratorList from '../components/CollaboratorList';

function Home() {
  // A lógica de estado e os componentes Sidebar/Header foram removidos
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <ProjectList />
      <CollaboratorList />
    </main>
  );
}

export default Home;