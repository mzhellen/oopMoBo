import { BrowserRouter, Routes, Route } from 'react-router-dom';
{/*import TelaLogin from './pages/TelaLogin';*/}
import TelaInicial from './pages/TelaInicial';
import Usuario from './pages/Usuario';
import Configuracoes from './pages/Configuracoes';
{/*import { Register } from './pages/Register';*/}

import Login from './pages/Login';
import Registrar from './pages/Registrar';

import Interesses from './pages/Interesses';
import AddFilme from './pages/AddFilme';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registrar/>}/>
        {/*<Route path="/" element={<TelaLogin />} />*/}
        {/*<Route path="/register" element={<Register />} />*/}
        <Route path="/inicial" element={<TelaInicial />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/interesses" element={<Interesses />} />
        <Route path="/estante" element={<TelaInicial />} />
        <Route path="/cadastrar" element={<TelaInicial />} />
        <Route path="/addfilme" element={<AddFilme />} />
      </Routes>
    </BrowserRouter>
  );
}
