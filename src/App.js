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
  // Textos para el carrusel de texto
  const textSlides = [
    {
      title: "Mapeo de Vectores en Tiempo Real",
      description: "Visualiza zonas de alto riesgo en un mapa interactivo con registros validados de avistamientos de insectos vectores en todo el país."
    },
    {
      title: "Sistema de Misiones y Niveles",
      description: "Completa misiones, sube de nivel y mejora tu perfil mientras contribuyes activamente a la protección de tu comunidad."
    },
    {
      title: "IA para Identificación de Insectos",
      description: "Tecnología de inteligencia artificial que identifica y clasifica insectos vectores de forma rápida y precisa a partir de tus fotos."
    },
    {
      title: "Prevención Comunitaria",
      description: "Ayuda a mantener informada a tu comunidad compartiendo avistamientos y contribuye a la prevención de enfermedades transmitidas por vectores."
    },
    {
      title: "Contribución y Reconocimiento",
      description: "Cada registro validado suma puntos a tu perfil, reconociendo tu compromiso con la salud pública y la prevención."
    }
  ];

  // Imágenes para el carrusel con títulos específicos
  const imageSlides = [
    { img: a1, title: "Crea tu cuenta", desc: "Regístrate para comenzar a usar la app" },
    { img: a2, title: "Revisa tus registros", desc: "Consulta tus avistamientos y contribuciones" },
    { img: a3, title: "Perfil de usuario", desc: "Administra tu información y preferencias" },
    { img: a4, title: "Misiones y niveles", desc: "Completa misiones y sube de nivel" },
    { img: a5, title: "Crea reportes", desc: "Genera informes sobre avistamientos y contribuciones" },
    { img: a6, title: "Mapa de calor", desc: "Visualiza la distribución de vectores en tu área" },
    { img: a7, title: "Descubre lo que tenemos para ti", desc: "Explora las funcionalidades de la app" }
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const imageRef = useRef(null);

  // Auto-avance para carruseles
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textSlides.length);
    }, 4000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageSlides.length);
    }, 3500);

    return () => {
      clearInterval(textInterval);
      clearInterval(imageInterval);
    };
  }, [textSlides.length, imageSlides.length]);

  return (
    <div className="App">
      {/* Contenido principal */}
      <div className="content">
        {/* Header con logo y nombre */}
        <header className="header">
          <div className="logo-container">
            <div className="logo">
              <img src={logo} alt="Prevectormx Logo" className="logo-image" />
            </div>
            <div className="logo-text-container">
              <span className="logo-text">Prevectormx</span>
              <span className="tagline">Prevención de Vectores México</span>
            </div>
          </div>
        </header>

        {/* Layout principal responsivo */}
        <div className="main-layout">
          {/* Carrusel de texto - izquierda */}
          <div className="carousel-container text-carousel">
            <div className="carousel-header">
              <h3 className="carousel-title">Características</h3>
            </div>
            <div className="carousel-content">
              <div className="text-slide" key={currentTextIndex}>
                <h3>{textSlides[currentTextIndex].title}</h3>
                <p>{textSlides[currentTextIndex].description}</p>
              </div>
            </div>
            <div className="carousel-dots">
              {textSlides.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentTextIndex ? 'active' : ''}`}
                  onClick={() => setCurrentTextIndex(idx)}
                />
              ))}
            </div>
          </div>

          {/* Sección central - Descarga */}
          <div className="center-section">
            <div className="hero-badge">
              <span className="badge">Innovación en Salud Pública</span>
            </div>
            <h1 className="main-title">
              <span className="gradient-text">Prevectormx</span>
              <br />
              <span className="highlight-text">Protege tu comunidad</span>
            </h1>
            <p className="subtitle">
              Registra avistamientos de insectos vectores, completa misiones, 
              sube de nivel y ayuda a prevenir enfermedades en tu localidad.
            </p>
            
            <div className="download-buttons">
              <button className="download-btn android" onClick={() => window.open(apk, '_blank')}>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5L3,20.5L9,13L9,13L3,20.5M15,3L15,3L12,6L12,6L15,3M10.5,8L10.5,8L17,14.5L17,14.5L10.5,8M18,6.5L18,6.5L21,10L21,10L18,6.5M20.5,3L20.5,3L15,8.5L15,8.5L20.5,3M3,3.5L3,3.5L9,10L9,10L3,3.5M12,6L12,6L6,12L6,12L12,6Z"/>
                </svg>
                <div className="btn-text">
                  Descargar APK
                  <span className="version">v1.0.0</span>
                </div>
              </button>
              
              <button className="download-btn ios disabled" disabled>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.85,21.18 10.37,21.95 9.17,22C7.87,22.05 6.86,20.68 6,19.38C4.31,16.81 3,11.95 5.5,8.81C6.73,7.21 8.4,6.23 10.17,6.23C11.65,6.23 12.81,7.09 13.73,7.09C14.65,7.09 16,6.08 17.68,6.23C18.61,6.3 20.32,6.86 21.27,8.36C21.13,8.45 19.09,9.71 19.1,12.09C19.12,14.07 20.68,15.27 21.09,15.64C20.86,16.05 20.38,16.9 19.73,17.73C18.98,18.73 18.27,19.74 17.71,19.5M15.61,4.15C16.5,3.2 17.09,1.92 16.89,0.62C15.77,0.77 14.45,1.39 13.67,2.32C12.96,3.16 12.45,4.44 12.63,5.68C13.79,5.81 14.88,5.25 15.61,4.15Z"/>
                </svg>
                <div className="btn-text">
                  App Store
                  <span className="coming-soon">Próximamente</span>
                </div>
              </button>
            </div>
            
            {/* Botón "Visita nuestra página" */}
            <div className="visit-button-container">
              <button className="visit-btn" onClick={() => window.open('https://prevectormx.com', '_blank')}>
                <svg className="visit-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,7V13L16,16L17,14.5L13,12V7H11Z"/>
                </svg>
                Visita nuestra página web
                <svg className="external-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Carrusel de imágenes mejorado - derecha */}
          <div className="carousel-container image-carousel">
            <div className="carousel-header">
              <h3 className="carousel-title">Capturas de la App</h3>
            </div>
            <div className="carousel-content">
              <div className="image-slide" 
                ref={imageRef}
                onMouseEnter={() => setIsHoveringImage(true)}
                onMouseLeave={() => setIsHoveringImage(false)}>
                <div className="image-frame">
                  <img 
                    src={imageSlides[currentImageIndex].img} 
                    alt={imageSlides[currentImageIndex].title}
                    className={`app-screenshot ${isHoveringImage ? 'hovered' : ''}`}
                  />
                  <div className="image-overlay">
                    <div className="image-caption">
                      <h4>{imageSlides[currentImageIndex].title}</h4>
                      <p>{imageSlides[currentImageIndex].desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button 
                className="carousel-nav prev" 
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + imageSlides.length) % imageSlides.length)}
              >
                ←
              </button>
              <div className="carousel-dots">
                {imageSlides.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
              <button 
                className="carousel-nav next" 
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % imageSlides.length)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;