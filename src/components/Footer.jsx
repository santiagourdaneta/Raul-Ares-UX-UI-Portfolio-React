// /src/components/Footer.jsx 

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const legalLinks = [
    { name: 'Política de Privacidad', path: '/privacy' },
    { name: 'Términos de Servicio', path: '/terms' },
    { name: 'Mapa del Sitio (Sitemap)', path: '/sitemap.xml' }, 
  ];

  return (
    // Rol semántico 'contentinfo' para el pie de página (Accesibilidad/SEO)
    <footer className="main-footer">
      <div className="footer-content-wrapper">
        
        {/* 1. Derechos de Autor y Logo (Base de la marca) */}
        <div className="footer-brand">
          <Link to="/" className="logo-link footer-logo-link">
             <span className="logo-text">RA</span><span className="logo-dot">.</span>
          </Link>
          <p className="footer-copyright">
            &copy; {currentYear} Raul Ares. Todos los derechos reservados.
            <br /> 
            Diseñado y Desarrollado con 💖.
          </p>
        </div>

        {/* 2. Navegación Legal y SEO */}
        <div className="footer-links-group legal-nav">
          <h3 className="footer-heading">Información Legal</h3>
          <ul className="footer-list">
            {legalLinks.map((item) => (
              <li key={item.name}>
                {item.name === 'Mapa del Sitio (Sitemap)' ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="footer-link">
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.path} className="footer-link">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* 3. Enlaces Sociales */}
        <div className="footer-links-group social-nav">
          <h3 className="footer-heading">Contactame</h3>
          <ul className="footer-list footer-social">
            <li><a href="https://linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
            <li><a href="https://twitter.com/tuperfil" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter/X</a></li>
            <li><a href="https://github.com/tuperfil" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;