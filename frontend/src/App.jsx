import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';
import { IniciarSessao } from './pages/IniciarSessao';
import TelaLogin from './pages/TelaLogin'; 
import { SaibaMais } from './pages/SaibaMais'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IniciarSessao />} />
        <Route path="/TelaLogin" element={<TelaLogin />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/SaibaMais" element={<SaibaMais />} />
      </Routes>
    </BrowserRouter>
  );
}
