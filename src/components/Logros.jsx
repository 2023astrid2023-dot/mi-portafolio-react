import React from 'react';

// Creamos el componente independiente y lo exportamos para que App.jsx lo pueda usar
export default function Logros({ setSeccion }) {
  return (
    <section className="section-modular-layout animate-fade">
      
      {/* Columna Izquierda: Tus tarjetas de estudio */}
      <div className="modulo-contenido-izq">
        <h2 className="section-title-left">Logros Académicos</h2>
        
        <div className="cards-stack">
          <div className="info-card">
            <div className="card-icon">🎓</div>
            <div className="card-content">
              <h3>Título Obtenido o Curso 1</h3>
              <p className="institution">Institución Educativa / Universidad</p>
              <span className="card-date">Año: 2026</span>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon">📜</div>
            <div className="card-content">
              <h3>Certificación o Estudio 2</h3>
              <p className="institution">Plataforma o Centro de Formación</p>
              <span className="card-date">Año: 2025</span>
            </div>
          </div>
        </div>

        {/* Usamos la función setSeccion que viene desde el archivo padre */}
        <button onClick={() => setSeccion('inicio')} className="back-btn mt-4">
          &larr; Volver al Inicio
        </button>
      </div>

      {/* Columna Derecha: Recuadro para la foto de tus logros */}
      <div className="modulo-visual-der">
        <div className="visual-box-mockup">
          <p className="upload-text">[ Imagen de Logros / Diplomas ]</p>
        </div>
      </div>

    </section>
  );
}
