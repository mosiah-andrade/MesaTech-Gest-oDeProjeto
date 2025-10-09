import React, { useState } from 'react';
import { FiX, FiCamera } from 'react-icons/fi';

const ModalCadastrarColaborador = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    cpf: '',
    rg: '',
    telefone: '',
    email: '',
    estadoCivil: '',
    estado: '',
    cidade: '',
    bairro: '',
    numero: '',
    matricula: '',
    cargo: '',
    dataAdmissao: '',
    regimeContratacao: '',
    periodoAusencia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do novo colaborador:', formData);
    onClose(); 
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      // A classe aqui foi alterada para bg-opacity-25
      className="fixed inset-0 bg-[rgba(0,0,0,0.50)] flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={handleModalContentClick}
      >
        <header className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Cadastrar novo colaborador</h2>
          <div className='flex items-center space-x-4'>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                <FiX size={24} />
            </button>
          </div>
        </header>

        <div className="p-6 overflow-y-auto">
          <form onSubmit={handleSubmit}>
            {/* Seção de Informações Pessoais */}
            <section className="mb-6">
                <div className="relative w-24 h-24 mb-4">
                    <div className="w-full h-full rounded-full bg-pink-100 flex items-center justify-center">
                    </div>
                    <button type="button" className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                        <FiCamera className="text-gray-600" />
                    </button>
                </div>

              <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Informações pessoais</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Nome completo</label>
                  <input type="text" name="nomeCompleto" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Data de nascimento</label>
                  <input type="date" name="dataNascimento" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">CPF</label>
                  <input type="text" name="cpf" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">RG</label>
                  <input type="text" name="rg" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Telefone/celular</label>
                  <input type="text" name="telefone" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
                  <input type="email" name="email" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Estado civil</label>
                  <select name="estadoCivil" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50">
                    <option value="">Selecione...</option>
                    <option value="solteiro">Solteiro(a)</option>
                    <option value="casado">Casado(a)</option>
                  </select>
                </div>
              </div>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Estado</label>
                  <input type="text" name="estado" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Cidade</label>
                  <input type="text" name="cidade" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Bairro</label>
                  <input type="text" name="bairro" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Número</label>
                  <input type="text" name="numero" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
              </div>
            </section>

            {/* Seção de Dados Profissionais */}
            <section>
              <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Dados profissionais</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Matrícula</label>
                  <input type="text" name="matricula" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Cargo</label>
                   <select name="cargo" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50">
                    <option value="">Selecione...</option>
                    <option value="analista">Analista de Negócios</option>
                  </select>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Data de admissão</label>
                  <input type="date" name="dataAdmissao" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Regime de contratação</label>
                   <select name="regimeContratacao" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50">
                    <option value="">Selecione...</option>
                    <option value="clt">CLT</option>
                    <option value="pj">PJ</option>
                  </select>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Período de Ausência</label>
                  <input type="text" name="periodoAusencia" onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50"/>
                </div>
              </div>
            </section>
            
            <footer className="flex justify-end pt-6 mt-6 border-t">
                <button
                type="submit"
                className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
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

export default ModalCadastrarColaborador;