import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './container/Home/home';
import AcercaDe from './container/AcercaDe/acercade';
import Contacto from './container/Contacto/contacto';
import Imagen from './container/Imagen/imagen';
// import Footer from './Footer';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  // 🔧 Sidebar buttons config (para no repetir JSX)
  const links = [
    { path: '/', text: 'Inicio', desc: '🌟 Página principal con presentación animada.', className: 'btn-inicio' },
    { path: '/acerca', text: 'Acerca de mí', desc: '📁 Mira todos mis proyectos creativos y un poco acerca de mi.', className: 'btn-acerca' },
    { path: '/imagen', text: 'Imagenes', desc: '🎬 Mira imagenes mostrada de forma dinámica y bonita.', className: 'btn-acerca' },
    { path: '/contacto', text: 'Contacto', desc: '📞 Contactame para colaborar o saludar.', className: 'btn-contacto' }
  ];

  return (
    <Router>
      <div className="App">
        {/* ☰ Botón para abrir/cerrar el sidebar */}
        <button className="menu-button" onClick={toggleSidebar}>☰</button>

        {/* 🌌 Sidebar futurista */}
        <div className={`mega-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-content">

            {/* 📝 Descripciones */}
            <div className="descripcion-panel">
              {links.map((link, index) => (
                <div key={index} className={`descripcion ${link.className.toLowerCase()}`}>
                  {link.desc}
                </div>
              ))}
            </div>

            {/* 🔘 Botones de navegación */}
            <div className="botones-panel">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `sidebar-button ${link.className} ${isActive ? 'active' : ''}`
                  }
                  onClick={toggleSidebar}
                >
                  {link.text}
                </NavLink>
              ))}
            </div>

          </div>
        </div>

        {/* 🎬 Zona de rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="/imagen" element={<Imagen />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
          {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
