import React, { useState } from 'react';
import './style.css';

const tarjetas = [
  {
    titulo: "🎨 Diseño UI",
    imagen: "https://www.doonamis.com/wp-content/uploads/2022/12/UI-UX-Design-1024x576-1.jpg",
    descripcion: "Interfaces limpias, modernas y atractivas."
  },
  {
    titulo: "⚙️ Código React",
    imagen: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/reactjs-benefits.jpg",
    descripcion: "Componentes reutilizables y dinámicos."
  },
  {
    titulo: "🎬 Animaciones Web",
    imagen: "https://www.deividart.com/wp-content/uploads/2019/07/animacion-web.jpg",
    descripcion: "Movimiento suave para destacar tu estilo."
  }
];

const Imagen = () => {
  const [modo, setModo] = useState('flex');

  return (
    <div className="galeria-container">
      <div className="botonera">
        <button onClick={() => setModo('flex')} className={modo === 'flex' ? 'activo' : ''}>Flex</button>
        <button onClick={() => setModo('grid')} className={modo === 'grid' ? 'activo' : ''}>Grid</button>
        <button onClick={() => setModo('fancy')} className={modo === 'fancy' ? 'activo' : ''}>Galería</button>
      </div>

      <div className={`galeria-contenido modo-${modo}`}>
        {tarjetas.map((card, index) => (
          <div className={`tarjeta ${modo}`} key={index}>
            <img src={card.imagen} alt={card.titulo} />
            <h3>{card.titulo}</h3>
            <p>{card.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagen;
