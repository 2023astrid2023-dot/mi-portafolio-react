import React from 'react';

export default function Experiencia({ setSeccion }) {
  return (
    <section className="animate-fade">
      
      {/* Título de la sección centrado */}
      <h2 className="profile-title text-center">Experiencia Laboral</h2>
      
      {/* Contenedor exclusivo para las tarjetas de solo texto */}
      <div className="experiencia-texto-container">
        
        
        <div className="job-card-text">
          <div className="job-header">
            <h3>Desarrolladora Junior / Analista (Proyectos SENA)</h3>
            <span className="job-date">2026 - Presente</span>
          </div>
          <p className="job-company">SENA - Tecnólogo ADSO</p>
          <p className="job-desc">
            Diseño y construcción de aplicaciones interactivas mediante el <strong>manejo de herramientas como HTML y CSS</strong> para las interfaces visuales, y la implementación de lógica estructurada en lenguajes como <strong>Java y Python</strong>.
          </p>
        </div>

        
        <div className="job-card-text">
          <div className="job-header">
            <h3>Administradora de Sistemas y Datos</h3>
            <span className="job-date">2024 - 2025</span>
          </div>
          <p className="job-company">Proyecto de Gestión Humana y Tecnología</p>
          <p className="job-desc">
            Soporte técnico en la estructuración de software y control de información corporativa, aplicando <strong>ciertas bases de datos</strong> organizadas para el almacenamiento seguro y el análisis efectivo de registros del área.
          </p>
        </div>

      </div>

      {/* EL BOTÓN DE TU GUÍA: Centrado abajo y dice textualmente "Inicio" */}
      <button onClick={() => setSeccion('inicio')} className="back-btn center">
        Inicio
      </button>

    </section>
  );
}
