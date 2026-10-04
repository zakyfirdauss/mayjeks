import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Letter from './pages/Letter.jsx'; // Halaman input PIN (22072025)
import Menu from './pages/Menu.jsx';   // Halaman isi surat, foto, & apresiasi

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surat" element={<Letter />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}