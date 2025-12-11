// src/pages/About.jsx 

import React from 'react';
import '../styles/global.css';
import '../styles/components/projectCard.css'; // Estilos específicos de about

const About = () => {
  return (
    <section className="about-container page-container">
      
      {/* 🖼️ Espacio para la Fotografía Personal */}
      <div className="about-hero-image-wrapper">
        <img 
          src="Raul-Ares.jpg"
          alt="Fotografía profesional de Raul Ares en un entorno de trabajo creativo." 
          className="about-hero-image"
        />
      </div>

      <div className="about-content">
        {/* Título Principal (SEO: Quién eres y qué haces) */}
        <h1 className="page-title">
          Soy Raul Ares. Diseñador UX/UI que da vida a las marcas.
        </h1>

        {/* 1. La Historia (El por qué) */}
        <p className="about-paragraph">
          Mi viaje en el diseño comenzó con la frustración por las interfaces que "gritan" en lugar de guiar. 
          Me especializo en desmantelar procesos complejos para construir experiencias digitales que se 
          sienten intuitivas, casi mágicas. No se trata solo de que se vea bonito; se trata de que sienta 
          lo que el usuario quiere hacer.
        </p>

        {/* 2. El Enfoque (El cómo) */}
        <h2 className="about-subtitle">Mi Metodología: Human-First Design</h2>
        <p className="about-paragraph">
          Mi proceso es un ciclo constante de investigación, prototipado y pruebas. 
          Trabajo en el cruce de la estética, la tecnología y el comportamiento humano. 
          Esto significa que cada pixel y cada línea de código está al servicio de un objetivo de negocio 
          y una necesidad real del usuario.
        </p>
        
        {/* 3. Habilidades Clave (Datos duros para el reclutador/cliente) */}
        <h2 className="about-subtitle">Herramientas & Habilidades</h2>
        <ul className="skills-list">
          <li>Diseño UX/UI: Figma, Sketch, Prototipado Avanzado, Diseño de Sistemas.</li>
          <li>Desarrollo Frontend: React.js, Next.js, HTML5, CSS3, JavaScript (ES6+).</li>
          <li>Investigación & Estrategia: User Interviews, Wireframing, Estrategia SEO, Análisis de Competencia.</li>
        </ul>
        
        {/* 4. Llamada a la Acción */}
        <h2 className="about-subtitle">Mi filosofía: Diseño que inspira</h2>
        <p className="about-paragraph">
          Creo en la colaboración abierta y en desafiar el status quo. 
          Si buscas un socio que no solo ejecute, sino que eleve la visión de tu producto digital, 
          explora mis proyectos.
        </p>
        
        {/* Enlace directo a Proyectos (CTA) */}
        <a href="/projects" className="primary-button about-cta">
          Ver mi portafolio completo
        </a>
      </div>
    </section>
  );
};

export default About;