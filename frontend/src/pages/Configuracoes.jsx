import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const API = 'http://localhost:8080/poo';

export default function Configuracoes() {
  const navigate = useNavigate();

  const [currentUserData, setCurrentUserData] = useState({ nome: '', email: '' });
  const [showNameForm, setShowNameForm] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const userHash = localStorage.getItem('userHash');
      if (!userHash) {
        alert('Você não está logado.');
        navigate('/login');
        return;
      }

      axios.defaults.headers.common['Authorization'] = `Bearer ${userHash}`;

      try {
        const response = await axios.get(`${API}/users/profile`);
        setCurrentUserData(response.data);
        setNewName(response.data.nome);
        setNewEmail(response.data.email);
      } catch (err) {
        console.error("Erro ao carregar dados do usuário:", err);
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          setError('Sessão inválida. Faça login novamente.');
          localStorage.removeItem('userHash');
          delete axios.defaults.headers.common['Authorization'];
          navigate('/login');
        } else {
          setError('Não foi possível carregar os dados do usuário.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleUpdate = async (fieldToUpdate, value) => {
    setMessage('');
    setError('');

    const userHash = localStorage.getItem('userHash');
    if (!userHash) {
      alert('Erro de autenticação. Por favor, faça login novamente.');
      navigate('/login');
      return;
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${userHash}`;

    const updatePayload = {};
    if (fieldToUpdate === 'nome') {
      if (!value || value === currentUserData.nome) { setError('Nome inválido ou igual ao atual.'); return; }
      updatePayload.nome = value;
    } else if (fieldToUpdate === 'email') {
      if (!value || value === currentUserData.email) { setError('Email inválido ou igual ao atual.'); return; }
      updatePayload.email = value;
    } else if (fieldToUpdate === 'senha') {
      if (!currentPassword) { setError('A senha atual é obrigatória.'); return; }
      if (!newPassword || newPassword.length < 6) { setError('A nova senha deve ter pelo menos 6 caracteres.'); return; }
      if (newPassword !== confirmNewPassword) { setError('A nova senha e a confirmação não coincidem.'); return; }

      updatePayload.senhaAtual = currentPassword;
      updatePayload.novaSenha = newPassword;
    } else {
      setError('Campo de atualização inválido.');
      return;
    }

    try {
      const response = await axios.patch(`${API}/users/update`, updatePayload);
      setMessage(`${fieldToUpdate === 'senha' ? 'Senha' : fieldToUpdate === 'nome' ? 'Nome' : 'E-mail'} redefinido(a) com sucesso!`);

      setCurrentUserData(prev => ({ ...prev, ...response.data }));

      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');

      setShowNameForm(false);
      setShowEmailForm(false);
      setShowPasswordForm(false);

    } catch (err) {
      console.error("Erro ao atualizar:", err);
      if (err.response) {
        setError(`Erro: ${err.response.data || 'Erro desconhecido.'}`);
      } else {
        setError('Erro de rede ou inesperado.');
      }
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-[#4D2C1C] text-[#f5e8c7] px-6 py-8 flex items-center justify-center">Carregando configurações...</div>;
  }

  if (error && !message) {
    return (
      <div className="min-h-screen bg-[#4D2C1C] text-[#f5e8c7] px-6 py-8 flex flex-col items-center justify-center">
        <p className="text-xl text-red-400 mb-4">{error}</p>
        <button onClick={() => navigate('/profile')} className="w-full max-w-xs bg-blue-400 text-white py-2 rounded-full hover:bg-blue-500">Voltar ao Perfil</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-[#f5e8c7] px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Configurações</h1>

      <div className="bg-[#f5e8c7] text-[#4D2C1C] rounded-2xl p-6 max-w-md mx-auto shadow-md flex flex-col gap-4">
        {message && <p className="success-message text-green-600 font-semibold">{message}</p>}
        {error && <p className="error-message text-red-600 font-semibold">{error}</p>}

        <button
          onClick={() => { setShowNameForm(true); setShowEmailForm(false); setShowPasswordForm(false); setError(''); setMessage(''); }}
          className="w-full bg-[#4D2C1C] text-white py-2 rounded-full hover:bg-[#27150c]"
        >
          Redefinir nome
        </button>
        {showNameForm && (
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate('nome', newName); }} className="reset-form">
            <div className="input-box">
              <input 
                type="text"
                placeholder={`Novo Nome (atual: ${currentUserData.nome})`}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
                className="text-[#4D2C1C] border-[#4D2C1C]"
              />
            </div>
            <div className="form-actions text-[#27150c] font-semibold">
              <button type="submit">Salvar Nome</button>
              <p></p>
              <button type="button" onClick={() => setShowNameForm(false)}>Cancelar</button>
            </div>
          </form>
        )}

        <button
          onClick={() => { setShowEmailForm(true); setShowNameForm(false); setShowPasswordForm(false); setError(''); setMessage(''); }}
          className="w-full bg-[#4D2C1C] text-white py-2 rounded-full hover:bg-[#27150c]"
        >
          Redefinir e-mail
        </button>
        {showEmailForm && (
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate('email', newEmail); }} className="reset-form">
            <div className="input-box">
              <input
                type="email"
                placeholder={`Novo E-mail (atual: ${currentUserData.email})`}
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
                className="text-[#4D2C1C] border-[#4D2C1C]"
              />
              <FaEnvelope className='icon'/>
            </div>
            <div className="form-actions text-[#27150c] font-semibold">
              <button type="submit">Salvar E-mail</button>
              <p></p>
              <button type="button" onClick={() => setShowEmailForm(false)}>Cancelar</button>
            </div>
          </form>
        )}

        <button
          onClick={() => { setShowPasswordForm(true); setShowNameForm(false); setShowEmailForm(false); setError(''); setMessage(''); }}
          className="w-full bg-[#4D2C1C] text-white py-2 rounded-full hover:bg-[#27150c]"
        >
          Redefinir senha
        </button>
        {showPasswordForm && (
          <form onSubmit={(e) => { e.preventDefault(); handleUpdate('senha', null); }} className="reset-form">
            <div className="input-box">
              <input
                type="password"
                placeholder='Senha Atual'
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="text-[#4D2C1C] border-[#4D2C1C]"
              />
              <FaLock className='icon'/>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder='Nova Senha'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="text-[#4D2C1C] border-[#4D2C1C]"
              />
              <FaLock className='icon'/>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder='Confirmar Nova Senha'
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
                className="text-[#4D2C1C] border-[#4D2C1C]"
              />
              <FaLock className='icon'/>
            </div>
            <div className="form-actions text-[#27150c] font-semibold">
              <button type="submit">Salvar Senha</button>
              <p></p>
              <button type="button" onClick={() => { setShowPasswordForm(false); setCurrentPassword(''); setNewPassword(''); setConfirmNewPassword(''); }}>Cancelar</button>
            </div>
          </form>
        )}

        <button
          onClick={() => navigate('/usuario')}
          className="mt-6 w-full bg-[#b67c6a] text-white py-2 rounded-full hover:bg-[#a46b5c]"
        >
          Voltar ao perfil
        </button>
      </div>
    </div>
  );
}
