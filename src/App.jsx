import React, { useState } from 'react';
import './App.css';

function App() {
  // El estado que controla qué módulo se muestra en pantalla. Inicia en 'inicio'
  const [seccion, setSeccion] = useState('inicio');

  return (
    <div className="portfolio-container">
      
      {/* ENCABEZADO (HEADER) - Igual para todas las secciones */}
      <header className="portfolio-header">
        <div className="header-info">
          <h1 className="header-name">ASTRID <span className="highlight">ALONSO</span></h1>
          <span className="header-link">Hoja de Vida Digital</span>
        </div>
        
        {/* Menú de navegación superior */}
        <nav className="portfolio-nav">
          {['inicio', 'perfil', 'logros', 'experiencia', 'habilidades', 'contacto'].map((item) => (
            <button
              key={item}
              onClick={() => setSeccion(item)}
              className={`nav-btn ${seccion === item ? 'active' : ''}`}
            >
              {item === 'logros' ? 'Logros' : item === 'experiencia' ? 'Experiencia' : item}
            </button>
          ))}
        </nav>
      </header>

      {/* CONTENIDO CENTRAL DINÁMICO */}
      <main className="portfolio-main">
        
        {/* ==========================================
            MÓDULO 1: INICIO (ESTRUCTURA IDÉNTICA AL MOCKUP)
           ========================================== */}
        {seccion === 'inicio' && (
          <section className="section-inicio animate-fade">
            
            {/* COLUMNA IZQUIERDA: Título y las 4 tarjetas principales */}
            <div className="inicio-textos">
              <h2 className="main-title">
                HOJA DE VIDA <span className="highlight">DIGITAL</span>
              </h2>
              <p className="subtitle">
                Mockup de página web personal de <span className="text-oro">Astrid Alonso</span>
              </p>
              
              {/* Cuadrícula de la izquierda (2 columnas, 2 filas) */}
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
              {/* Recuadro de presentación grisáceo de tu imagen */}
              <div className="visual-box-mockup">
                <p className="upload-text">[ Recuadro de Imagen ]</p>
              </div>
              
              {/* Botón de contacto ubicado exactamente debajo de la foto */}
              <button onClick={() => setSeccion('contacto')} className="menu-card-btn-solid contacto-btn">
                Contacto
              </button>
            </div>

          </section>
        )}

                {/* ==========================================
            MÓDULO 2: PERFIL PROFESIONAL (PERSONALIZADO)
           ========================================== */}
        {seccion === 'perfil' && (
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
              "srhg<ahsh"
            </p>
            
            {/* Botón estético para regresar */}
            <button onClick={() => setSeccion('inicio')} className="back-btn">
              &larr; Volver al Inicio
            </button>
          </section>
        )}
                {/* ==========================================
            MÓDULO 2: PERFIL PROFESIONAL (PERSONALIZADO)
           ========================================== */}
        {seccion === 'perfil' && (
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
              "Estudiante de programación y técnica en RR.HH. enfocada en el desarrollo con HTML, CSS, Java y Python. Combino habilidades creativas, gestión de bases de datos y soluciones colaborativas para impulsar proyectos modernos."
            </p>
            
            {/* Botón estético para regresar */}
            <button onClick={() => setSeccion('inicio')} className="back-btn">
              &larr; Volver al Inicio
            </button>
          </section>
        )}











































        {seccion === 'logros' && (
          <div className="placeholder-vista text-center animate-fade">
            <h2>Módulo: Logros Académicos</h2>
            <p>Pronto completaremos esta sección con tus estudios.</p>
            <button onClick={() => setSeccion('inicio')} className="back-btn">Volver al Inicio</button>
          </div>
        )}

        {seccion === 'experiencia' && (
          <div className="placeholder-vista text-center animate-fade">
            <h2>Módulo: Experiencia Laboral</h2>
            <p>Aquí organizaremos tus trabajos anteriores.</p>
            <button onClick={() => setSeccion('inicio')} className="back-btn">Volver al Inicio</button>
          </div>
        )}

        {seccion === 'habilidades' && (
          <div className="placeholder-vista text-center animate-fade">
            <h2>Módulo: Habilidades</h2>
            <p>Aquí añadiremos tus destrezas técnicas y blandas.</p>
            <button onClick={() => setSeccion('inicio')} className="back-btn">Volver al Inicio</button>
          </div>
        )}

        {seccion === 'contacto' && (
          <div className="placeholder-vista text-center animate-fade">
            <h2>Módulo: Contacto</h2>
            <p>Aquí programaremos tu formulario de opinión.</p>
            <button onClick={() => setSeccion('inicio')} className="back-btn">Volver al Inicio</button>
          </div>
        )}

      </main>

      {/* PIE DE PÁGINA (FOOTER) - Igual para todas las secciones */}
      <footer className="portfolio-footer">
        <p className="footer-contacts">Telefono: +57 3013680049 | Correo:2023astrid2023@gmail.com</p>
        <p className="footer-note">bienvenido pie de pagina</p>
      </footer>

    </div>
  );
}

export default App;





       