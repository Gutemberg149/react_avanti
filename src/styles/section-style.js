import styled, { keyframes } from "styled-components";

export const SectionComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;

  .topsectionContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 33px;
    .innerContainer01 {
      display: flex;
      align-items: center;
      width: 384px;
      height: 82px;
      margin-bottom: 27px;
      .icon {
        width: 58px;
        height: 58px;
      }
      h1 {
        font-size: 50px;
        font-weight: 600;
      }
      span {
        font-weight: 800;
      }
    }
  }

  .bottomsectionContainer {
    display: flex;
    align-items: start;
    justify-content: center;
    height: 257px;
    width: 804px;

    .Erro404 {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #d9d9d9;
      width: 710px;
      height: 88px;
      border-radius: 10px;

      h4 {
        color: red;
        font-size: 20px;
        font-weight: 400;
        width: 497px;
        text-align: center;
      }
    }
  }
`;

//Animacao do loading...
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

//estilização da animação do loading...
export const ColorfulSpinner = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #3498db 0%, #9b59b6 25%, #e74c3c 50%, #f1c40f 75%, #2ecc71 100%);
    mask: radial-gradient(farthest-side, transparent calc(100% - 5px), #000 0);
    animation: ${spin} 1s linear infinite;
  }
`;

//Estilização do componente que vai a palavra loading.
export const LoadingText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 800;
  z-index: 100;
  margin: 0;
`;
