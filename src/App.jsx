import { useState } from "react";

import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { GameContainer } from "./components/GameContainer";

function App() {
  const [char, setChar] = useState("x");

  const resetGame = () => {
    const c = char === "x" ? "y" : "x";
    setChar(c);
  };

  return (
    <Container>
      <Hero />
      <GameContainer key={char} onReset={resetGame} />
    </Container>
  );
}

export default App;
