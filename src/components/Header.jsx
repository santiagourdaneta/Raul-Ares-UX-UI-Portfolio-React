// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css'; 

const Header = () => {
  return (
    //  Rol semántico 'banner' para Google y lectores de pantalla (SEO/Accesibilidad)
    <header className="main-header"> 
      
      {/* El Logo/Nombre (Siempre lleva a Home) */}
      <div className="header-logo">
        <Link to="/" className="logo-link">
          {/* El nombre con un estilo sutil */}
          <span className="logo-text">RA</span>
          <span className="logo-dot">.</span>
        </Link>
      </div>

      {/* Rol semántico 'navigation' (SEO/Accesibilidad) */}
      <nav className="header-nav">
        <ul className="nav-list">
          {/* Utiliza Link en lugar de <a> para navegación interna rápida (SPA UX) */}
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Proyectos</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Acerca de</Link>
          </li>
        </ul>
      </nav>

      {/* Se podría añadir un botón de modo oscuro aquí si se implementa */}
    </header>
  );
};

export default Header;