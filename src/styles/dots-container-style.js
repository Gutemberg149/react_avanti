import styled from "styled-components";

//Esse é o container que estão os circulos no background.
export const DotContainer = styled.div`
  position: absolute;
  width: 239px;
  height: 239px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 6.2px);
  grid-template-rows: repeat(auto-fill, 6.2px);
  gap: 6px;
  top: 28px;
  left: 71px;
`;

//Esse é o circulo dendro do container.
export const Dot = styled.div`
  width: 6.2px;
  height: 6.2px;
  background-color: #272727;
  border-radius: 50%;
`;
