import React, { useEffect, useState } from 'react';
import "./loader.css";

const phrases = [
  "Cargando magia musical...",
  "Creando tu mezcla perfecta...",
  "Afinando los beats...",
  "Conectando con Spotify...",
  "Desatando tu sonido único..."
];

const Loader = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-wrapper">
      <div className="loader" />
      <p className="loader-phrase">{phrases[currentPhrase]}</p>
    </div>
  );
};

export default Loader;
