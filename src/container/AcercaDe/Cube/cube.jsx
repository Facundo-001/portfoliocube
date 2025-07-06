// Cube.jsx
import React from 'react';
import './cube.css'; // Crearemos este archivo CSS en el siguiente paso

const cube = ({ size = 50, speed = 10, startDelay = 0, initialRotation = { x: 0, y: 0, z: 0 } }) => {
  const style = {
    '--cube-size': `${size}px`,
    '--animation-speed': `${speed}s`,
    '--animation-delay': `${startDelay}s`,
    '--initial-rotateX': `${initialRotation.x}deg`,
    '--initial-rotateY': `${initialRotation.y}deg`,
    '--initial-rotateZ': `${initialRotation.z}deg`,
  };

  return (
    <div className="rotating-cube-bg" style={style}>
      <div className="cube-face cube-front"></div>
      <div className="cube-face cube-back"></div>
      <div className="cube-face cube-right"></div>
      <div className="cube-face cube-left"></div>
      <div className="cube-face cube-top"></div>
      <div className="cube-face cube-bottom"></div>
    </div>
  );
};

export default cube;