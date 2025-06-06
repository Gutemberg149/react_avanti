import { DotContainer, Dot } from "../styles/dots-container-style";

export default function DotContainerComponent() {
  // 239 é o atamnho do quadrado, width e o height é o 8 tamanho do ponto.
  const numDots = Math.floor((239 / 8) * (239 / 8));
  return (
    <DotContainer>
      {Array.from({ length: numDots }).map((_, index) => (
        <Dot key={index} />
      ))}
    </DotContainer>
  );
}
