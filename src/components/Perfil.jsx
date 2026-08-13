import React from 'react';
// Dejamos la ruta apuntando al nuevo nombre limpio
import fotoAstrid from '../foto.png'; 


export default function Perfil({ setSeccion }) {
  return (
    <section className="section-perfil text-center animate-fade">
      <h2 className="section-title">Perfil Profesional</h2>
      
      {/* Contenedor circular con tu foto real */}
      <div className="profile-avatar-container">
        <div className="profile-avatar">
          <img src={fotoAstrid} alt="Astrid Alonso" className="foto-avatar-real" />
        </div>
      </div>

      {/* Tu excelente descripción de Programación y RR.HH. */}
      <p className="profile-desc">
        "Estudiante de programación y técnica en RR.HH. enfocada en el 
        desarrollo con HTML, CSS, Java y Python. Combino habilidades creativas, gestión de bases 
        de datos y soluciones colaborativas para impulsar proyectos modernos."
      </p>
      
      
      <button onClick={() => setSeccion('inicio')} className="back-btn center">
        Inicio
      </button>
    </section>
  );
}
