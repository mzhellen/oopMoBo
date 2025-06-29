import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // <<< Importe useNavigate
import { FaUser, FaLock } from "react-icons/fa";
import './CSS/Login.css'

const API = 'http://localhost:8080/poo';

const Login = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const [message, setMessage] = useState(''); 

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setMessage(''); 

        try {
            const response = await axios.post(`${API}/auth/login`, {
                email: email,
                senha: password 
            });

            const hash = response.data;
            console.log("Login.jsx: Login bem-sucedido! Hash recebido do backend:", hash);

            localStorage.setItem('userHash', hash);
            console.log("Login.jsx: Valor de 'userHash' em localStorage APÓS setItem:", localStorage.getItem('userHash'));

            axios.defaults.headers.common['Authorization'] = `Bearer ${hash}`;
            console.log("Login.jsx: Cabeçalho Authorization padrão do Axios configurado.");
 
            navigate('/inicial');

        } catch (error) {
            console.error("Login.jsx: Erro no login:", error);
            if (error.response) {
                if (error.response.status === 401 || error.response.status === 403) {
                     setMessage('Credenciais inválidas. Verifique seu e-mail e senha.');
                } else {
                     setMessage(`Erro: ${error.response.data}`);
                }
            } else if (error.request) {
                setMessage('Erro: Nenhuma resposta do servidor. Tente novamente mais tarde.');
            } else {
                setMessage('Erro inesperado. Tente novamente.');
            }
        }
    };

    return(
        <div className='wrapper'>
            <form className="form" onSubmit={handleSubmit}> 
                <h1>Login</h1>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder='e-mail'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <FaUser className='icon'/>
                </div>

                <div className="input-box">
                    <input
                        type="password"
                        placeholder='senha'
                        required
                        value={password} 
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <FaLock className='icon'/>
                </div>

                <button type="submit">Login</button>

                {message && <p className="message">{message}</p>} 

                <div className="register-link">
                    <p>Não tem uma conta?<a href="/register"> Registre-se!</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;