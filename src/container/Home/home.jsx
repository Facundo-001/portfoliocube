import React from 'react';
import './style.css';
import { useEffect } from 'react';
import hollow from './hollow-back.png';

const Home = () => {

  useEffect(() => {
  const ojos = document.querySelectorAll('.ojo');

  const moverPupila = (e) => {
    ojos.forEach((ojo) => {
      const pupila = ojo.querySelector('.pupila');
      const rect = ojo.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const maxMove = 10; // límite de movimiento
      const distX = Math.min(Math.max(x, -maxMove), maxMove);
      const distY = Math.min(Math.max(y, -maxMove), maxMove);
      pupila.style.transform = `translate(${distX}px, ${distY}px)`;
    });
  };

  window.addEventListener('mousemove', moverPupila);
  return () => window.removeEventListener('mousemove', moverPupila);
}, []);

  return (
    <div className="seccion-presentacion">
        <div className="carita-cursor">
          <div className="ojo">
            <div className="pupila"></div>
          </div>
          <div className="ojo">
            <div className="pupila"></div>
          </div>
          {/* <div className="boca">w</div> */}
        </div>

      {/* 🎲 Cubo animado (oculto en móviles por CSS) */}
      <div className="cubo-container">
        <div className="cubo">
          <div className="cara frente">
            <svg viewBox="0 0 120 120" width="250" height="250" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="45" r="10" fill="#030625" />
              <circle cx="85" cy="45" r="10" fill="#030625" />
              <path d="M45 80 Q60 95 75 80" stroke="#030625" strokeWidth="5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div className="cara atras"></div>
          <div className="cara derecha"></div>
          <div className="cara izquierda"></div>
          <div className="cara arriba"></div>
          <div className="cara abajo"></div>
        </div>
      </div>

      {/* 🧾 Presentación de bienvenida */}
      <div className="box-precentacion">
        <div className="texto">
          <h2>Bienvenido a la Web</h2>
          <p>
            Esta página fue elaborada con el propósito de demostrar mis habilidades de diseño.
          </p>
          <img className="img" src={hollow} alt="Imagen Hollow" />

          {/* 🌟 Solo para móviles */}
          {/* <div className="solo-movil">
            🌐 Estás viendo la versión móvil. ¡Gracias por visitar!
          </div> */}
        </div>
      </div>

    </div>
  );
};

export default Home;
