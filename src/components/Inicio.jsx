import React from 'react';
import fotoAstrid from '../foto.png';


export default function Inicio({ setSeccion }) {
  return (
    <section className="section-inicio animate-fade">
      
      {/* COLUMNA IZQUIERDA: Título de tu guía y las 4 tarjetas principales */}
      <div className="inicio-textos">
        <h2 className="main-title">
          HOJA DE VIDA <span className="highlight">DIGITAL</span>
        </h2>
        <p className="subtitle">
          Mockup de página web personal de <span className="text-oro">Astrid Alonso</span>
        </p>
        
        {/* Matriz de botones de la izquierda (2 columnas, 2 filas) */}
        <div className="grid-menu">
          <button onClick={() => setSeccion('perfil')} className="menu-card-btn-solid">
            Perfil Profesional
          </button>
          <button onClick={() => setSeccion('logros')} className="menu-card-btn-solid">
            Logros Académicos
          </button>
          <button onClick={() => setSeccion('experiencia')} className="menu-card-btn-solid">
            Experiencia Laboral
          </button>
          <button onClick={() => setSeccion('habilidades')} className="menu-card-btn-solid">
            Habilidades
          </button>
        </div>
      </div>

      {/* COLUMNA DERECHA: Tu foto enmarcada + Botón de Contacto abajo */}
      <div className="inicio-derecha">
        {/* El recuadro del portaretratos que calza con tu mockup */}
        <div className="visual-box-mockup">
          <img src={fotoAstrid} alt="Astrid Alonso" className="foto-portada-real" />
        </div>
        
        {/* Botón de contacto ubicado exactamente debajo de la foto */}
        <button onClick={() => setSeccion('contacto')} className="menu-card-btn-solid contacto-btn">
          Contacto
        </button>
      </div>

    </section>
  );
}
