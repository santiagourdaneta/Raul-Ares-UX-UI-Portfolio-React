// /src/App.jsx - Versión Final Definitiva

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Projects from './pages/Projects';
import About from './pages/About'; // Añadimos la página About para una navegación completa


const App = () => {
  return (
    <Router>
      <Header /> 

      {/* 🧭 Rol Semántico Principal (SEO/Accesibilidad) */}
      <main className="page-content"> 
        <Routes>
          {/* URL amigable y contenido claro */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          {/* Se pueden añadir rutas 404 aquí */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;