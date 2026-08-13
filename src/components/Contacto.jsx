import React, { useState } from 'react';

export default function Contacto({ setSeccion }) {
  // Guardamos en la memoria de React lo que la persona escribe en los campos
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    pregunta: ''
  });

  // Esta función se activará cuando la persona hable con tu base de datos
  const manejarEnvio = async (e) => {
    e.preventDefault();
    
    try {
      // Dejamos listo el puente para conectarse con tu servidor de Backend más adelante
      alert(`¡Gracias ${formulario.nombre}! Tu pregunta ha sido enviada. Pronto se guardará en MongoDB.`);
      console.log("Datos listos para viajar al Backend:", formulario);
      
      // Aquí limpiaremos el formulario tras enviar
      setFormulario({ nombre: '', email: '', pregunta: '' });
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <section className="animate-fade text-center">
      
      <h2 className="profile-title">Contáctame</h2>
      <p className="subtitle">Déjame tu pregunta sobre mi hoja de vida digital</p>

      {/* Formulario limpio y estilizado */}
      <div className="experiencia-texto-container">
        <form onSubmit={manejarEnvio} className="job-card-text">
          
          <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--accent-gold)', fontWeight: '600', textAlign: 'left' }}>Nombre Completo</label>
            <input 
              type="text" 
              required 
              value={formulario.nombre}
              placeholder="Ej. Ana María Silva"
              style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', color: 'white' }}
              onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
            />
          </div>

          <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--accent-gold)', fontWeight: '600', textAlign: 'left' }}>Correo Electrónico</label>
            <input 
              type="email" 
              required 
              value={formulario.email}
              placeholder="correo@ejemplo.com"
              style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', color: 'white' }}
              onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
            />
          </div>

          <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: 'var(--accent-gold)', fontWeight: '600', textAlign: 'left' }}>Tu Pregunta</label>
            <textarea 
              rows="4" 
              required 
              value={formulario.pregunta}
              placeholder="Escribe aquí lo que deseas consultar..."
              style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-dark)', color: 'white', resize: 'none' }}
              onChange={(e) => setFormulario({ ...formulario, pregunta: e.target.value })}
            />
          </div>

          <button type="submit" className="menu-card-btn-solid" style={{ width: '100%', padding: '1rem' }}>
            Enviar Pregunta
          </button>

        </form>
      </div>

      {/* EL BOTÓN DE TU GUÍA: Centrado abajo y dice textualmente "Inicio" */}
      <button onClick={() => setSeccion('inicio')} className="back-btn center">
        Inicio
      </button>

    </section>
  );
}
