import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';
import Interests from './pages/Interests';
import Home from './pages/Home'; // 👈 nova página

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/interesses" element={<Interests />} />
      </Routes>
    </Router>
  );
}
