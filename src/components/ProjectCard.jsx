// /src/components/ProjectCard.jsx 

import React from 'react';
import { Link } from 'react-router-dom'; // Para navegar a la página de detalle del proyecto
import '../styles/global.css'; // Usaremos los estilos globales para consistencia
import '../styles/components/projectCard.css'; // Estilos específicos de la tarjeta

const ProjectCard = ({ title, category, image, link }) => {
  return (
    // Artículo semántico para cada proyecto (SEO)
    <article className="project-card">
      {/* Enlace que envuelve toda la tarjeta para una mejor UX (área de clic grande) */}
      <Link to={link} className="project-link" aria-label={`Ver detalles del proyecto ${title}`}>
        
        {/* Imagen del proyecto */}
        <div className="project-image-wrapper">
          <img 
            src={image || 'https://via.placeholder.com/600x400?text=Proyecto'} // Imagen por defecto si no hay
            alt={`Vista previa del proyecto ${title}`} 
            className="project-image" 
            loading="lazy" 
          />
          {/* Capa de overlay para un efecto visual sutil al pasar el ratón (UX) */}
          <div className="project-overlay"></div>
        </div>

        {/* Contenido de texto del proyecto */}
        <div className="project-content">
          <h3 className="project-title">{title}</h3> {/* Título del proyecto (SEO) */}
          <p className="project-category">{category}</p> {/* Categoría (UX para filtrar/organizar) */}
          {/* Flecha indicadora de interacción (UX) */}
          <span className="project-arrow" aria-hidden="true">&#x2192;</span> 
        </div>

      </Link>
    </article>
  );
};

export default ProjectCard;