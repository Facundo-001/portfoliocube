// components/Footer.jsx
import './style.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* 🌌 Lado izquierdo: mensaje personalizado */}
        <div className="footer-info">
          <p>💛 Página creada con mucho cariño por Fanta.</p>
          <p className="footer-credits">
            Construida con <FaReact className="react-icon" /> React · © {new Date().getFullYear()}
          </p>
        </div>

        {/* 🔗 Enlaces rápidos */}
        <div className="footer-links">
          <a href="/">Inicio</a>
          <a href="/acerca">Acerca de mí</a>
          <a href="/imagen">Imágenes</a>
          <a href="/contacto">Contacto</a>
        </div>

        {/* 🌐 Redes sociales */}
        <div className="footer-social">
          <a href="https://github.com/tuUsuario" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tuUsuario" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:tuemail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
