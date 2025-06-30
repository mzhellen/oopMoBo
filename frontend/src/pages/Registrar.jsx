import React, { useState } from 'react';
import axios from 'axios';
import '../pages/CSS/Login.css'; 
import { FaUser, FaLock } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa"; 

const API_BASE_URL = 'http://localhost:8080/poo';

const Registrar = () => {
    
    const [name, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');
    const [birthday, setAniv] = useState(''); 
    const [message, setMessage] = useState(''); 

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        setMessage(''); 

        try {
            const response = await axios.post(`${API_BASE_URL}/auth/register`, {
                nome: nome,
                email: email,
                senha: senha,
                aniv: aniv 
            });

            console.log("Registro bem-sucedido! Resposta:", response.data);
            setMessage('Usuário registrado com sucesso!');
            
            setNome('');
            setEmail('');
            setSenha('');
            setAniv('');

        } catch (error) {
            console.error("Erro no registro:", error);
            if (error.response) {
                setMessage(`Erro no registro: ${error.response.data}`);
            }
        }
    };

    return(
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Registrar</h1>

                
                <div className="input-box">
                    <input
                        type="text"
                        placeholder='Nome completo'
                        required
                        value={name}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <FaUser className='icon'/>
                </div>

                <div className="input-box">
                    <input
                        type="email" 
                        placeholder='E-mail'
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

                <div className="input-box">
                    <input
                        type="date"
                        placeholder='data de aniversário' 
                        required
                        value={birthday}
                        onChange={(e) => setAniv(e.target.value)}
                    />
                    <FaCalendarAlt className='icon'/>
                </div>

                <button type="submit">Registrar</button>

                {message && <p className="message">{message}</p>}

                <div className="register-link">
                    <p>Já tem uma conta?<a href="/"> Faça Login!</a></p> 
                </div>
            </form>
        </div>
    );
};

export default Registrar;