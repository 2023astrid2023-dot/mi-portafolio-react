
import React, { useState } from 'react';
import './App.css';

// Importamos tus componentes independientes de la carpeta components
import Inicio from './components/Inicio.jsx';
import Perfil from './components/Perfil.jsx';
import Logros from './components/Logros.jsx';
import Experiencia from './components/Experiencia.jsx';
import Habilidades from './components/Habilidades.jsx'; 
function App() {
  // El único estado que controla la navegación de las pestañas
  const [seccion, setSeccion] = useState('inicio');

  return (
    <div className="portfolio-container">
      
      {/* MENÚ SUPERIOR GLOBAL */}
      <header className="portfolio-header">
        <div className="header-info">
          <h1 className="header-name">ASTRID <span className="highlight">ALONSO</span></h1>
          <span className="header-link">Hoja de Vida Digital</span>
        </div>
        
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

      {/* CONTENIDO CENTRAL */}
      <main className="portfolio-main">
        
        {seccion === 'inicio' && <Inicio setSeccion={setSeccion} />}
        
        {seccion === 'perfil' && <Perfil setSeccion={setSeccion} />}
        
        {seccion === 'logros' && <Logros setSeccion={setSeccion} />}

        {/* CONEXIÓN REAL: Tu archivo Experiencia.jsx con tus datos reales */}
        {seccion === 'experiencia' && <Experiencia setSeccion={setSeccion} />}

       {seccion === 'habilidades' && <Habilidades setSeccion={setSeccion} />}


        {seccion === 'contacto' && (
          <div className="placeholder-container text-center animate-fade">
            <h2 className="title-placeholder">Contacto</h2>
            <button onClick={() => setSeccion('inicio')} className="back-btn center">Inicio</button>
          </div>
        )}

      </main>

      {/* PIE DE PÁGINA GLOBAL */}
      <footer className="portfolio-footer">
        <p className="footer-contacts">Teléfono: +57 3013680049 | Correo: 2023astrid2023@gmail.com</p>
        <p className="footer-note">Pie de página igual para todas las secciones</p>
      </footer>

    </div>
  );
}

export default App;
