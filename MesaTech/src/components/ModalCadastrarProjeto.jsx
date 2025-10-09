import React, { useState } from 'react';
import { FiX, FiSearch, FiUserPlus } from 'react-icons/fi';
import { collaborators } from '../data/mockData';

const ModalCadastrarProjeto = ({ onClose }) => {
  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    horasEstimadas: '',
    dataInicio: '',
    dataTermino: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Novo projeto:", formData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.25)] flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Modal */}
        <header className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Cadastrar novo Projeto</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <FiX size={24} />
          </button>
        </header>

        {/* Corpo do Modal */}
        <div className="p-6 overflow-y-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Seção Esquerda: Informações do projeto */}
              <div className="md:col-span-2">
                <h3 className="font-semibold text-gray-700 mb-4">Informações do projeto</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Nome do projeto</label>
                    <input type="text" name="nome" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Descrição do projeto</label>
                    <textarea name="descricao" rows="8" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"></textarea>
                  </div>
                </div>
              </div>

              {/* Seção Direita: Selecionar colaboradores */}
              <div>
                 <div className="flex items-center mb-4">
                    <FiUserPlus className="text-red-500 mr-2" size={20}/>
                    <h3 className="font-semibold text-gray-700">Selecione os colaboradores</h3>
                 </div>
                 <div className="border rounded-lg p-3 bg-gray-50 max-h-64 overflow-y-auto mb-4">
                    <div className="relative mb-3">
                        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Pesquisar" className="w-full p-2 pl-9 border rounded-md"/>
                    </div>
                    <ul className="space-y-2">
                        {collaborators.slice(0, 3).map(collab => ( // Usando 3 colaboradores como exemplo
                            <li key={collab.id} className="flex justify-between items-center p-2 hover:bg-gray-200 rounded-md">
                                <div className="flex items-center">
                                    <img src={collab.avatar} alt={collab.name} className="w-8 h-8 rounded-full mr-3"/>
                                    <span className="text-sm font-medium text-gray-800">{collab.name}</span>
                                </div>
                                {collab.name === 'Beatriz Oliveira Ramos' && <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">Férias</span>}
                            </li>
                        ))}
                    </ul>
                 </div>
                 {/* Campos de Data e Horas */}
                 <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Quantidade de horas estimadas</label>
                        <input type="text" name="horasEstimadas" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Data de Início</label>
                        <input type="date" name="dataInicio" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Data de Término</label>
                        <input type="date" name="dataTermino" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                    </div>
                 </div>
              </div>
            </div>

            {/* Rodapé */}
            <footer className="flex justify-end pt-6 mt-6 border-t">
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold px-8 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Salvar
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalCadastrarProjeto;