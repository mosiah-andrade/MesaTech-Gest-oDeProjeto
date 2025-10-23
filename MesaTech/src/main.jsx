import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

// 1. Importe o novo Layout
import MainLayout from './components/MainLayout.jsx';

// Importe suas páginas
import Projetos from './pages/Projetos.jsx'; 
import Home from './pages/Home.jsx';
import Colaboradores from './pages/Colaboradores.jsx';
import ColaboradoresPerfil from './pages/ColaboradoresPerfil.jsx';

const router = createBrowserRouter([
  {
    // 2. A rota "pai" agora é o MainLayout
    path: "/",
    element: <MainLayout />,
    // 3. As páginas agora são "children" (filhas) do Layout
    children: [
      {
        path: "/", // Rota exata para a Home
        element: <Home />,
      },
      {
        path: "projetos",
        element: <Projetos />,
      },
      {
        path: "colaboradores",
        element: <Colaboradores />,
      },
      {
        path: "colaboradoresPerfil/id:",
        element: <ColaboradoresPerfil />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);