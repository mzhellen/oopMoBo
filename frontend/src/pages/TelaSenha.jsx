import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TelaSenha() {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const handleEntrar = () => {
    navigate('/inicial');
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-[#4D2C1C]">
      <div className="w-full max-w-sm p-8 bg-[#f5e8c7] shadow-lg rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-center text-[#4D2C1C]">Digite sua senha</h2>

        <label className="block mb-1 text-sm font-medium text-[#4D2C1C]" htmlFor="senha">
          Senha
        </label>
        <input
          id="senha"
          type={mostrarSenha ? 'text' : 'password'}
          value={senha}
          onChange={e => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          className="w-full px-4 py-2 mb-4 border border-[#b67c6a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#aa926c]"
        />

        <div className="flex items-center mb-4">
          <input
            id="mostrarSenha"
            type="checkbox"
            checked={mostrarSenha}
            onChange={() => setMostrarSenha(!mostrarSenha)}
            className="mr-2"
          />
          <label htmlFor="mostrarSenha" className="text-[#4D2C1C] cursor-pointer">
            Mostrar senha
          </label>
        </div>

        <button
          onClick={handleEntrar}
          className="w-full py-2 mb-4 text-white transition bg-[#b67c6a] rounded-md hover:bg-[#9e5f4d]"
        >
          Entrar
        </button>

        <div className="flex justify-between text-sm text-[#4D2C1C]">
          <button onClick={() => navigate('/login')} className="underline">
            Voltar
          </button>
          <a href="#" className="underline">
            Esqueceu a senha?
          </a>
        </div>
      </div>
    </div>
  );
}