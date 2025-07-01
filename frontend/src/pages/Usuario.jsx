import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 

const API = 'http://localhost:8080/poo'; 

export default function Usuario() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(''); 

  useEffect(() => {
      const fetchUserProfile = async () => {
      const userHash = localStorage.getItem('userHash'); 
      
      if (!userHash) {
        alert('Você não está logado. Redirecionando para a página de login.');
        navigate('/');
        return;
      }

      axios.defaults.headers.common['Authorization'] = `Bearer ${userHash}`;

      try {
        setLoading(true); 
        const response = await axios.get(`${API}/users/profile`);
        setUsuario(response.data); 
      } catch (err) {
        console.error("Erro ao buscar perfil:", err);
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          setError('Sessão inválida ou expirada. Faça login novamente.');
          localStorage.removeItem('userHash');
          delete axios.defaults.headers.common['Authorization']; 
          navigate('/');
        } else {
          setError('Não foi possível carregar o perfil do usuário.');
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchUserProfile();
  }, [navigate]); 


  const handleLogout = () => {
    localStorage.removeItem('userHash'); 
    delete axios.defaults.headers.common['Authorization']; 
    navigate('/'); 
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#4D2C1C] text-[#f5e8c7] px-6 py-8 flex items-center justify-center">
        <p className="text-xl">Carregando perfil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#4D2C1C] text-[#f5e8c7] px-6 py-8 flex flex-col items-center justify-center">
        <p className="text-xl text-red-400 mb-4">{error}</p>
        <button
          onClick={handleLogout}
          className="w-full max-w-xs bg-blue-400 text-white py-2 rounded-full hover:bg-blue-500"
        >
          Ir para Login
        </button>
      </div>
    );
  }

  if (!usuario) {
    return (
      <div className="min-h-screen bg-[#4D2C1C] text-[#f5e8c7] px-6 py-8 flex items-center justify-center">
        <p className="text-xl">Nenhum dado de usuário encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen transparent text-[#f5e8c7] px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Perfil do Usuário</h1>

      <div className="bg-[#f5e8c7] text-[#4D2C1C] rounded-2xl p-6 max-w-md mx-auto shadow-md">
        <p className="mb-2"><span className="font-semibold">Nome:</span> {usuario.nome}</p>
        <p className="mb-2"><span className="font-semibold">E-mail:</span> {usuario.email}</p>
        <p className="mb-4"><span className="font-semibold">Data de Nascimento:</span> {usuario.aniv ? new Date(usuario.aniv).toLocaleDateString() : 'Não informado'}</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/configuracoes')}
            className="w-full bg-[#b67c6a] text-white py-2 rounded-full hover:bg-[#a46b5c]"
          >
            Configurações
          </button>
          <button
            onClick={handleLogout} 
            className="w-full bg-[#4D2C1C] text-white py-2 rounded-full hover:bg-[#27150c]"
          >
            Logout
          </button>
          <button
            onClick={() => navigate('/inicial')}
            className="w-full bg-[#f5e8c7] text-[#4D2C1C] py-2 rounded-full border border-[#4D2C1C] hover:bg-[#ebd8ae]"
          >
            Voltar para estante
          </button>
        </div>
      </div>
    </div>
  );
}