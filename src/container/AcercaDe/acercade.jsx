import React, { useEffect, useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import './style.css';

const codeSnippets = [
  `// Inicializando sistema...\nbootSequence();`,
  `const status = "🟢 ONLINE";\nconsole.log("Sistema activo:", status);`,
  `if (input === "humano") {\n  grantAccess();\n} else {\n  denyAccess();\n}`,
  `while (cerebro.funciona()) {\n  ideas.push("nueva funcionalidad");\n}`,
  `const visor = () => render("⚡ Visualizando patrones...");`,
  `let memoria = cargar("archivos_secreto.dat");`,
  `// Analizando entorno...\nscanModules(["interfaz", "movimiento", "estética"]);`,
  `try {\n  ejecutar("diseño_procedural");\n} catch(e) {\n  reiniciarProceso();\n}`,
  `fetch("data/realidad.json")\n  .then(res => res.decode())\n  .then(render);`,
  `console.log("🧠 Procesando pensamientos...");`
];

const proyectos = [
  {
    nombre: "ChatGlobal",
    descripcion: "Un chat global cual puedes hablar con personas atra vez de un chat que funciona en tiempo real",
    tecnologias: ["React", "Bootstrap", "CSS", "Firebase", "JavaScript", "Netlify"],
    link: "chatglobalred.netlify.app"
  }
  // {
  //   nombre: "Calculadora UI",
  //   descripcion: "Una calculadora moderna con animaciones suaves y estilo personalizado.",
  //   tecnologias: ["HTML", "CSS", "JavaScript", "Flexbox"],
  //   link: "https://calculadora-futurista.vercel.app"
  // },
  // {
  //   nombre: "Mini Pokémon API",
  //   descripcion: "App que consume la API de Pokémon y muestra resultados con buscador.",
  //   tecnologias: ["React", "Bootstrap", "fetch API"],
  //   link: "https://pokemon-api-test.netlify.app"
  // }
];

const AcercaDe = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = codeSnippets[index];
    let timer;

    if (!isDeleting && displayedText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 30);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % codeSnippets.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index]);

  return (
    <div className="Box-acercade">
      <div className="acercade-container">

        {/* 🚀 Caja unificada de terminal + redes */}
        <div className="terminal-social-card">
          <div className="code-mock">
            <code>{displayedText}<span className="cursor">|</span></code>
          </div>

          <div className="redes-panel">
            <a href="https://github.com/Facundo-001" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="tiktok.com/@fantasma_tmf_company" target="_blank" rel="noopener noreferrer">
              <SiTiktok /> TikTok
            </a>
            {/* <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a> */}
          </div>
        </div>

        {/* 👾 Sección Sobre Mí */}
        <div className="acercade-card">
          <h1>👾 Sobre mí</h1>
          <p className="intro">
            ¡Hola! Soy <strong>Fanta/Nox/Gonzalo</strong>, un apasionado del diseño, la programación y los efectos visuales
            con un toque original. 💻✨
          </p>
          <p>
            Me encanta explorar nuevas ideas, crear interfaces atractivas, y experimentar con animaciones que
            parezcan sacadas de un videojuego o una película futurista. 🎮🪐
          </p>
          <p>
            Siempre busco aprender y mejorar, combinando creatividad con tecnología para hacer que cada
            proyecto tenga vida propia.
          </p>

          <div className="habilidades">
            <h2>⚙️ Habilidades</h2>
            <ul>
              <li>✨ HTML, CSS, JavaScript, React, un poco de sql, firebase, GitHub</li>
              <li>🎨 Diseño visual y animaciones UI</li>
              <li>🧠 Resolución de problemas creativos</li>
              <li>🎮 Pasión por los detalles y la estética gamer</li>
            </ul>
          </div>

          <div className="proyectos">
            <h2>💼 Proyectos</h2>
            {proyectos.map((proyecto, i) => (
              <div key={i} className="proyecto-item">
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
                <p><strong>Tecnologías:</strong> {proyecto.tecnologias.join(', ')}</p>
                {proyecto.link && (
                  <a
                    href={`https://${proyecto.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyecto-link"
                  >
                    🔗 Ver Proyecto
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AcercaDe;
