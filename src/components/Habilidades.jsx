import React from 'react';


export default function Habilidades({ setSeccion }) {
  return (
    <section className="animate-fade text-center">
      
      {/* Título elegante del módulo */}
      <h2 className="profile-title">Mis Habilidades </h2>
      
      <div className="habilidades-container">
        
        {/* Bloque 1:fortalezas en el área de Tecnología */}
        <div className="skills-box-text">
          <h3>Habilidades Técnicas y de Desarrollo</h3>
          <div className="tags-grid">
            <span className="skill-tag">Lógica de Programación</span>
            <span className="skill-tag">Estructuración de Código Web</span>
            <span className="skill-tag">Escritura de Scripts en Python</span>
            <span className="skill-tag">Análisis de Requerimientos</span>
            <span className="skill-tag">Programación Estructurada en Java</span>
            <span className="skill-tag">Administración de Repositorios GitHub</span>
          </div>
        </div>

      </div>

      {/* EL BOTÓN GUÍA: Centrado abajo y dice textualmente "Inicio" */}
      <button onClick={() => setSeccion('inicio')} className="back-btn center">
        Inicio
      </button>

    </section>
  );
}
