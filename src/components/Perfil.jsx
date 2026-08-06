import React from 'react';

// Exportamos el componente Perfil y recibimos 'setSeccion' para el botón de volver
export default function Perfil({ setSeccion }) {
  return (
    <section className="section-perfil text-center animate-fade">
      <h2 className="section-title">Perfil Profesional</h2>
      
      {/* Zona para tu avatar circular elegante */}
      <div className="profile-avatar-container">
        <div className="profile-avatar">
          <span>Astrid Johana Alonso Buenaventura</span>
        </div>
      </div>

      {/* Tu descripción ejecutiva profesional */}
      <p className="profile-desc">
        "Estudiante de programación y técnica en RR.HH. enfocada en el 
        desarrollo con HTML, CSS, Java y Python. Combino habilidades creativas gestión de bases 
         de datos y soluciones colaborativas para impulsar proyectos modernos."
      </p>
      
      {/* Botón estético para regresar al inicio */}
      <button onClick={() => setSeccion('inicio')} className="back-btn">
        &larr; Volver al Inicio
      </button>
    </section>
  );
}
