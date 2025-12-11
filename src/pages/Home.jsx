// src/pages/Home.jsx

import React from 'react';
import '../styles/global.css'; 

const Home = () => {
  return (
    <section className="home-hero">
      <h1 className="hero-title">
        Hola, soy Raul.<br />
        Diseño experiencias digitales.
      </h1>

      {/* Pequeña descripción y CTA (Llamada a la Acción) */}
      <p className="hero-subtitle">
        Diseño UX/UI, Desarrollo Frontend y Estrategia SEO.
      </p>

      <div className="cta-container">
        <a href="/projects" className="primary-button">
          Ver mi trabajo
        </a>
      </div>
      
      {/* Un pequeño toque extra: una animación simple en el fondo */}
      <div className="floating-shape"></div>
    </section>
  );
};

export default Home;