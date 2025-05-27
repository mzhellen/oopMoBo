import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
