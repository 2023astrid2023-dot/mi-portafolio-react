import React from 'react';

// IMPORTACIÓN: Traemos las dos fotos desde la carpeta src con el punto correcto (.)
import fotoSena from '../logoSena.png'; 
import fotoColegio from '../colegio.jpg';

export default function Logros({ setSeccion }) {
  return (
    <section className="animate-fade">
      
      {/* Título de la sección de tu guía */}
      <h2 className="profile-title text-center">Logros Académicos</h2>
      
      {/* Cuadrícula organizada para alinear tus 3 tarjetas */}
      <div className="logros-grid">
        
        {/* Tarjeta 1: Tu Tecnólogo Actual (¡El más importante!) */}
        <div className="logro-card">
          <div className="logro-img-box">
            <img src={fotoSena} alt="Logo SENA ADSO" className="logro-img" />
          </div>
          <div className="logro-info">
            <h3>Tecnólogo en Análisis y Desarrollo de Software (Cursando)</h3>
            <p className="inst-name">SENA (Servicio Nacional de Aprendizaje)</p>
            <span className="inst-date">Periodo: 2026 - Presente</span>
          </div>
        </div>

        {/* Tarjeta 2: Tu Técnica anterior */}
        <div className="logro-card">
          <div className="logro-img-box">
            <img src={fotoSena} alt="Logo SENA RR.HH." className="logro-img" />
          </div>
          <div className="logro-info">
            <h3>Técnica en Recursos Humanos</h3>
            <p className="inst-name">SENA (Servicio Nacional de Aprendizaje)</p>
            <span className="inst-date">Año de graduación: 2024</span>
          </div>
        </div>

        {/* Tarjeta 3: Tu Bachillerato */}
        <div className="logro-card">
          <div className="logro-img-box">
            <img src={fotoColegio} alt="Logo Colegio" className="logro-img" />
          </div>
          <div className="logro-info">
            <h3>Bachiller Académico</h3>
            <p className="inst-name">Institución Educativa Colegio Real</p>
            <span className="inst-date">Año de graduación: 2024</span>
          </div>
        </div>

      </div>

      {/* EL BOTÓN DE TU GUÍA: Centrado abajo y dice textualmente "Inicio" */}
      <button onClick={() => setSeccion('inicio')} className="back-btn center">
        Inicio
      </button>

    </section>
  );
}
