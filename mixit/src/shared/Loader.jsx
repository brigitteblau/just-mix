// src/components/LargeLoader.jsx
import React from 'react';
import styled from 'styled-components';

const LargeLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        {/* Gradients and animation defs */}
        <svg className="absolute" width={0} height={0}>
          <defs>
            <linearGradient id="b" x1={0} y1={62} x2={0} y2={2} gradientUnits="userSpaceOnUse">
              <stop stopColor="#973BED" />
              <stop offset={1} stopColor="#007CFF" />
            </linearGradient>
            <linearGradient id="c" x1={0} y1={64} x2={0} y2={0} gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC800" />
              <stop offset={1} stopColor="#F0F" />
              <animateTransform attributeName="gradientTransform" type="rotate" values="0 32 32;-270 32 32;-540 32 32;-810 32 32;-1080 32 32" dur="8s" repeatCount="indefinite" />
            </linearGradient>
            <linearGradient id="d" x1={0} y1={62} x2={0} y2={2} gradientUnits="userSpaceOnUse">
              <stop stopColor="#00E0ED" />
              <stop offset={1} stopColor="#00DA72" />
            </linearGradient>
          </defs>
        </svg>

        {/* Letras: M, I, X, I, T */}
        <svg viewBox="0 0 44 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 52 L2 4 L12 30 L22 4 L32 30 L42 4 L42 52" className="dash gradient-b" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <svg viewBox="0 0 20 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4 L10 52" className="dash gradient-c" strokeWidth={4} strokeLinecap="round" />
        </svg>

        <svg viewBox="0 0 44 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 4 L42 52 M42 4 L2 52" className="dash gradient-d" strokeWidth={4} strokeLinecap="round" />
        </svg>

        <svg viewBox="0 0 20 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4 L10 52" className="dash gradient-b" strokeWidth={4} strokeLinecap="round" />
        </svg>

        <svg viewBox="0 0 44 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 4 L42 4 M22 4 L22 52" className="dash gradient-c" strokeWidth={4} strokeLinecap="round" />
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
  }

  .loader svg {
    margin: 0 5px;
    width: 64px;
    height: 64px;
  }

  .absolute {
    position: absolute;
  }

  /* Animaciones */
  .dash {
    animation:
      dashArray 2s ease-in-out infinite,
      dashOffset 2s linear infinite;
  }

  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }
    50% {
      stroke-dasharray: 0 359 1 0;
    }
    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }

  @keyframes dashOffset {
    0% {
      stroke-dashoffset: 365;
    }
    100% {
      stroke-dashoffset: 5;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    12.5%,
    25% {
      transform: rotate(270deg);
    }
    37.5%,
    50% {
      transform: rotate(540deg);
    }
    62.5%,
    75% {
      transform: rotate(810deg);
    }
    87.5%,
    100% {
      transform: rotate(1080deg);
    }
  }

  /* Gradientes aplicados */
  .gradient-b {
    stroke: url(#b);
  }
  .gradient-c {
    stroke: url(#c);
  }
  .gradient-d {
    stroke: url(#d);
  }
`;

export default LargeLoader;
