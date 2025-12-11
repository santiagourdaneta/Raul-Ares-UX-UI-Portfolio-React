// /src/pages/Projects.jsx 

import React from 'react';
import '../styles/global.css'; 
import ProjectCard from '../components/ProjectCard'; 

// Datos dummy de proyectos 
const projectData = [
  { 
    id: 1, 
    title: 'Rediseño de E-Commerce Móvil', 
    category: 'UX/UI & Research', 
    link: '#', 
    // Imagen: E-commerce minimalista
    image: 'ecommerce-movil.jpg' 
  },
  { 
    id: 3, 
    title: 'Branding y Sitio Web Personal', 
    category: 'Visual Design', 
    link: '#', 
    // Imagen: Diseño gráfico, minimalista con tipografía
    image: 'personal-branding.jpg' 
  },
   { 
    id: 4, 
    title: 'Landing Page de Lanzamiento de Producto', 
    category: 'Strategy & Marketing', 
    link: '#', 
    // Imagen: Laptop/Web Design
    image: 'landing-page-launch.jpg' 
  },
];

const Projects = () => {
  return (
    <section className="projects-container">
      {/* Título SEO Principal */}
      <h1 className="page-title">Trabajos Recientes.</h1>
      {/* Subtítulo informativo */}
      <p className="page-subtitle">Una muestra de mis proyectos favoritos de UX/UI y Desarrollo Frontend.</p>
      
      {/* La cuadrícula de proyectos */}
      <div className="project-grid">
        {projectData.map(project => (
          // Usamos un componente ProjectCard para limpieza y reutilización
          <ProjectCard 
            key={project.id}
            title={project.title}
            category={project.category}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>

    </section>
  );
};

export default Projects;