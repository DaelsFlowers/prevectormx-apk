import { useState, useEffect, useRef } from 'react';
import './App.css';

import logo from './assets/logo.png';

import a1 from './assets/a1.jpeg';
import a2 from './assets/a2.jpeg';
import a3 from './assets/a3.jpeg';
import a4 from './assets/a4.jpeg';
import a5 from './assets/a5.jpeg';
import a6 from './assets/a6.jpeg';
import a7 from './assets/a7.jpeg';

import apk from './apk/PrevectorMx.apk';

function App() {
  const textSlides = [
    {
      icon: "🗺️",
      tag: "Mapa",
      title: "Mapeo de Vectores en Tiempo Real",
      description: "Visualiza zonas de alto riesgo en un mapa interactivo con registros validados de avistamientos de artrópodos vectores en todo el país."
    },
    {
      icon: "🔍",
      tag: "Nuevo en v1.1.0",
      title: "Búsqueda por Especie y Artrópodo",
      description: "Filtra reportes por especie o tipo de artrópodo directamente en VerReporte, con búsqueda avanzada y dropdowns mejorados."
    },
    {
      icon: "📋",
      tag: "Nuevo en v1.1.0",
      title: "Lista de Artrópodos Agrupada",
      description: "La lista de insectos ahora es una lista completa de artrópodos organizada por grupos taxonómicos para mayor precisión."
    },
    {
      icon: "🛡️",
      tag: "Nuevo en v1.1.0",
      title: "Panel Administrativo por Roles",
      description: "El PanelAdministrativo filtra las tarjetas según el rol del usuario, mostrando únicamente las opciones relevantes para cada perfil."
    },
    {
      icon: "🤖",
      tag: "IA",
      title: "Identificación con Inteligencia Artificial",
      description: "Tecnología de IA que identifica y clasifica artrópodos vectores de forma rápida y precisa a partir de fotografías."
    },
    {
      icon: "🏆",
      tag: "Gamificación",
      title: "Misiones y Sistema de Niveles",
      description: "Completa misiones, sube de nivel y acumula puntos mientras contribuyes activamente a la salud pública de tu comunidad."
    }
  ];

  const imageSlides = [
    { img: a1, title: "Crea tu cuenta", desc: "Regístrate para comenzar" },
    { img: a2, title: "Revisa tus registros", desc: "Consulta tus avistamientos" },
    { img: a3, title: "Perfil de usuario", desc: "Administra tu información" },
    { img: a4, title: "Misiones y niveles", desc: "Completa misiones y sube de nivel" },
    { img: a5, title: "Crea reportes", desc: "Genera informes de avistamientos" },
    { img: a6, title: "Mapa de calor", desc: "Distribución de vectores en tu área" },
    { img: a7, title: "Descubre la app", desc: "Explora todas las funcionalidades" }
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textPaused, setTextPaused] = useState(false);
  const [imagePaused, setImagePaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (textPaused) return;
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textSlides.length);
    }, 4500);
    return () => clearInterval(textInterval);
  }, [textSlides.length, textPaused]);

  useEffect(() => {
    if (imagePaused) return;
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageSlides.length);
    }, 3500);
    return () => clearInterval(imageInterval);
  }, [imageSlides.length, imagePaused]);

  const changeImage = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const stats = [
    { value: "7+", label: "Pantallas" },
    { value: "IA", label: "Identificación" },
    { value: "100%", label: "Gratis" },
  ];

  return (
    <div className="App">
      {/* Partículas decorativas de fondo */}
      <div className="bg-particles" aria-hidden="true">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
        <div className="particle p5" />
      </div>

      <div className="content">
        {/* Header */}
        <header className="header">
          <div className="logo-container">
            <div className="logo-icon-wrap">
              <img src={logo} alt="Prevectormx Logo" className="logo-image" />
            </div>
            <div className="logo-text-container">
              <span className="logo-text">Prevectormx</span>
              <span className="tagline">Prevención de Vectores México</span>
            </div>
          </div>

          <div className="header-stats">
            {stats.map((s, i) => (
              <div className="stat-pill" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Layout principal */}
        <div className="main-layout">

          {/* Carrusel de texto — izquierda */}
          <aside
            className="panel text-panel"
            onMouseEnter={() => setTextPaused(true)}
            onMouseLeave={() => setTextPaused(false)}
          >
            <div className="panel-header">
              <span className="panel-icon" aria-hidden="true">✦</span>
              <h2 className="panel-title">Características</h2>
            </div>

            <div className="text-slide-area">
              <div className="text-slide" key={currentTextIndex}>
                <div className="slide-tag-row">
                  <span className="slide-emoji" aria-hidden="true">{textSlides[currentTextIndex].icon}</span>
                  <span className="slide-tag">{textSlides[currentTextIndex].tag}</span>
                </div>
                <h3 className="slide-title">{textSlides[currentTextIndex].title}</h3>
                <p className="slide-desc">{textSlides[currentTextIndex].description}</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="progress-track">
              <div
                className={`progress-bar ${!textPaused ? 'running' : ''}`}
                key={currentTextIndex}
              />
            </div>

            <div className="dot-row">
              {textSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === currentTextIndex ? 'active' : ''}`}
                  onClick={() => setCurrentTextIndex(idx)}
                  aria-label={`Característica ${idx + 1}`}
                />
              ))}
            </div>
          </aside>

          {/* Sección central */}
          <main className="center-section">
            <div className="version-badge-row">
              <span className="version-badge">
                <span className="badge-dot" aria-hidden="true" />
                Versión 1.1.0 disponible
              </span>
            </div>

            <h1 className="main-title">
              <span className="gradient-text">Prevectormx</span>
              <br />
              <span className="sub-title-text">Protege tu comunidad</span>
            </h1>

            <p className="subtitle">
              Registra avistamientos de artrópodos vectores, identifícalos con IA,
              completa misiones y ayuda a prevenir enfermedades en tu localidad.
            </p>

            {/* Changelog v1.1.0 */}
            <div className="changelog-block">
              <p className="changelog-header">
                <span className="changelog-dot" aria-hidden="true" />
                Novedades en v1.1.0
              </p>
              <ul className="changelog-list">
                <li>Búsqueda por especie y artrópodo en VerReporte</li>
                <li>Lista de artrópodos con agrupación taxonómica</li>
                <li>Estilos mejorados en dropdowns y botones</li>
                <li>Panel administrativo filtrado por roles de usuario</li>
              </ul>
            </div>

            <div className="download-buttons">
              <button
                className="download-btn android"
                onClick={() => window.open(apk, '_blank')}
                aria-label="Descargar APK de Prevectormx versión 1.1.0"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C3.4408 10.3988 1.8325 12.8585 1.8325 15.6858h20.3349c0-2.8273-1.6083-5.287-4.2854-6.3644"/>
                </svg>
                <div className="btn-text">
                  <span className="btn-label">Descargar APK</span>
                  <span className="version-tag">Android · v1.1.0</span>
                </div>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 16l-4-4h3V4h2v8h3l-4 4zm-6 2h12v2H6v-2z"/>
                </svg>
              </button>

              <button className="download-btn ios" disabled aria-disabled="true">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.85,21.18 10.37,21.95 9.17,22C7.87,22.05 6.86,20.68 6,19.38C4.31,16.81 3,11.95 5.5,8.81C6.73,7.21 8.4,6.23 10.17,6.23C11.65,6.23 12.81,7.09 13.73,7.09C14.65,7.09 16,6.08 17.68,6.23C18.61,6.3 20.32,6.86 21.27,8.36C21.13,8.45 19.09,9.71 19.1,12.09C19.12,14.07 20.68,15.27 21.09,15.64C20.86,16.05 20.38,16.9 19.73,17.73C18.98,18.73 18.27,19.74 17.71,19.5M15.61,4.15C16.5,3.2 17.09,1.92 16.89,0.62C15.77,0.77 14.45,1.39 13.67,2.32C12.96,3.16 12.45,4.44 12.63,5.68C13.79,5.81 14.88,5.25 15.61,4.15Z"/>
                </svg>
                <div className="btn-text">
                  <span className="btn-label">App Store</span>
                  <span className="version-tag">Próximamente</span>
                </div>
              </button>
            </div>

            <button
              className="visit-btn"
              onClick={() => window.open('https://prevectormx.com', '_blank')}
            >
              <svg className="visit-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,7V13L16,16L17,14.5L13,12V7H11Z"/>
              </svg>
              Visita nuestra página web
              <svg className="external-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
              </svg>
            </button>
          </main>

          {/* Carrusel de imágenes — derecha */}
          <aside
            className="panel image-panel"
            onMouseEnter={() => setImagePaused(true)}
            onMouseLeave={() => setImagePaused(false)}
          >
            <div className="panel-header">
              <span className="panel-icon" aria-hidden="true">✦</span>
              <h2 className="panel-title">Capturas de la App</h2>
              <span className="image-counter">
                {currentImageIndex + 1} / {imageSlides.length}
              </span>
            </div>

            <div className="image-slide-area">
              <div className={`phone-frame ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                <div className="phone-notch" aria-hidden="true" />
                <img
                  src={imageSlides[currentImageIndex].img}
                  alt={imageSlides[currentImageIndex].title}
                  className="app-screenshot"
                />
                <div className="phone-caption">
                  <span className="caption-title">{imageSlides[currentImageIndex].title}</span>
                  <span className="caption-desc">{imageSlides[currentImageIndex].desc}</span>
                </div>
              </div>
            </div>

            <div className="image-controls">
              <button
                className="nav-btn"
                onClick={() => changeImage((currentImageIndex - 1 + imageSlides.length) % imageSlides.length)}
                aria-label="Imagen anterior"
              >
                ←
              </button>
              <div className="dot-row">
                {imageSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => changeImage(idx)}
                    aria-label={`Captura ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                className="nav-btn"
                onClick={() => changeImage((currentImageIndex + 1) % imageSlides.length)}
                aria-label="Imagen siguiente"
              >
                →
              </button>
            </div>
          </aside>

        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Prevectormx · Prevención de Vectores México · <span className="footer-version">v1.1.0</span></p>
        </footer>
      </div>
    </div>
  );
}

export default App;