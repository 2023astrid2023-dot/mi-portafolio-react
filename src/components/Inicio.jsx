import React from 'react';

// Exportamos el componente Inicio y recibimos 'setSeccion' para que los botones cambien de pestaña
export default function Inicio({ setSeccion }) {
  return (
    <section className="section-inicio animate-fade">
      
      {/* COLUMNA IZQUIERDA: Título y las 4 tarjetas principales */}
      <div className="inicio-textos">
        <h2 className="main-title">
          HOJA DE VIDA <span className="highlight">DIGITAL</span>
        </h2>
        <p className="subtitle">
          Mockup de página web personal de <span className="text-oro">Astrid Alonso</span>
        </p>
        
        {/* Cuadrícula de acceso rápido (2 columnas, 2 filas) */}
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

      {/* COLUMNA DERECHA: Recuadro de imagen + Botón de Contacto abajo */}
      <div className="inicio-derecha">
        {/* Recuadro de presentación grisáceo de tu mockup */}
        <div className="visual-box-mockup">
          <p className="upload-text">[ Recuadro de Imagen ]</p>
        </div>
        
        {/* Botón de contacto ubicado exactamente debajo de la foto */}
        <button onClick={() => setSeccion('contacto')} className="menu-card-btn-solid contacto-btn">
          Contacto
        </button>
      </div>

    </section>
  );
}
