import React, { useState } from 'react'; 
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";
import './CSS/Login.css'


const API_BASE_URL = 'http://localhost:8080/poo';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); 

   
    const handleSubmit = async (event) => {
        event.preventDefault(); 

        setMessage(''); 

        try {
            
            const response = await axios.post(`${API_BASE_URL}/auth/login`, {
                email: email,
                senha: password 
            });

            // Se o login for bem-sucedido, o backend retorna o hash (token) no corpo da resposta
            const hash = response.data;
            console.log("Login bem-sucedido! Hash recebido:", hash);

            // 1. Guardar o hash no localStorage (melhor prática para tokens JWT/hash)
            // Lembre-se que o backend retorna o hash no CORPO da resposta, não no cabeçalho.
            localStorage.setItem('userHash', hash);

            // 2. Opcional: Configurar o Axios para enviar o hash automaticamente em futuras requisições
            // Isso é útil para requisições a rotas protegidas
            axios.defaults.headers.common['Authorization'] = `Bearer ${hash}`;

            setMessage('Login bem-sucedido!');

        } catch (error) {
            console.error("Erro no login:", error);
            if (error.response) {
                setMessage(`Erro: ${error.response.data}`);
            } else if (error.request) {
                setMessage('Erro: Nenhuma resposta do servidor. Tente novamente mais tarde.');
            } else {
                setMessage('Erro inesperado. Tente novamente.');
            }
        }
    };

    return(
        <div className='wrapper'>
            <form onSubmit={handleSubmit}> 
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
                        placeholder='password'
                        required
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icon'/>
                </div>

                <button type="submit">Login</button>

                {message && <p className="message">{message}</p>} 

                <div className="register-link">
                    <p>Não tem uma conta?<a href="#">Registre-se!</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;