import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';
import Login from './pages/Login';
import Registrar from './pages/Registrar';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registrar/>}/>
      </Routes>
    </BrowserRouter>
  );
}
