import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contactUs from './undraw_contact-us.svg'; // 🎨 Tu ilustración SVG o PNG
import './style.css';

const Contacto = () => {
  const form = useRef();
  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState('');

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q0pg46h', 'template_agjadvi', form.current, 'Rjd4AJFDTaUJCi-wC')
      .then(() => {
        setTipoMensaje('exito');
        setMensaje('✅ ¡Mensaje enviado con éxito!');
        e.target.reset();
        setTimeout(() => setMensaje(null), 4000);
      }, (error) => {
        setTipoMensaje('error');
        setMensaje('❌ Error al enviar el mensaje. Intentalo más tarde.');
        console.log(error);
        setTimeout(() => setMensaje(null), 4000);
      });
  };

  return (
    <div className="contacto-container">
      <div className="imagen-contacto">
        <img src={contactUs} alt="Ilustración contacto" />
      </div>

      <div className="contacto-card">
        <h1>📞 Contacto</h1>
        <p>¿Querés decirme algo, colaborar o simplemente saludar? ¡Escribime!</p>

        <form className="formulario-contacto" ref={form} onSubmit={enviarCorreo}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="name" placeholder="Tu nombre" required />
          
          <label htmlFor="asunto">Asunto</label>
          <input type="text" id="asunto" name="asunto" placeholder="Tu asunto" required />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="message" rows="5" placeholder="Contame lo que quieras..." required></textarea>

          <button type="submit">Enviar mensaje 🚀</button>
        </form>
      </div>

      {mensaje && (
        <div className={`notificacion-flotante ${tipoMensaje}`}>
          <span className="emoji">{tipoMensaje === 'exito' ? '✅' : '❌'}</span>
          {mensaje}
        </div>
      )}
    </div>
  );
};

export default Contacto;
