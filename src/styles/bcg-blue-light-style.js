import styled, { keyframes } from "styled-components";

// Definição da animação "bounce" para mover o elemento
const bounce = keyframes`
  0%, 100% {
    top: -70%;
  }
  50% {
    top: 70%;
  }
`;

// Definição da animação "bounce" para mover o elemento
const bounce2 = keyframes`
  0%, 100% {
    top: 70%;
  }
  50% {
    top: -70%; 
  }
`;

//Abaixo os dois componentes que estão background.
export const BlueLightRight = styled.div`
  position: absolute;
  width: 888px;
  height: 888px;
  border-radius: 50%;
  top: -50%;
  right: -30%;
  background: radial-gradient(
    circle at center,
    white 0%,
    rgba(0, 92, 255, 1) 0%,
    rgba(0, 92, 255, 0.7) 15%,
    rgba(0, 92, 255, 0.4) 30%,
    rgba(0, 92, 255, 0) 70%
  );
  animation: ${bounce} 20s infinite;
`;

export const BcgBlueLightLeft = styled.div`
  position: absolute;
  width: 888px;
  height: 888px;
  border-radius: 50%;
  bottom: -50%;
  left: -40%;
  background: radial-gradient(
    circle at center,
    white 0%,
    rgba(0, 92, 255, 1) 0%,
    rgba(0, 92, 255, 0.7) 15%,
    rgba(0, 92, 255, 0.4) 30%,
    rgba(0, 92, 255, 0) 70%
  );
  animation: ${bounce2} 20s infinite;
`;
