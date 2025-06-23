import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaLogin from './pages/TelaLogin';
import TelaSenha from './pages/TelaSenha';
import TelaInicial from './pages/TelaInicial';
import Usuario from './pages/Usuario';
import Configuracoes from './pages/Configuracoes';
import { Register } from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaLogin />} />         
        <Route path="/senha" element={<TelaSenha />} />     
        <Route path="/register" element={<Register />} />  
        <Route path="/inicial" element={<TelaInicial />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </BrowserRouter>
  );
}
