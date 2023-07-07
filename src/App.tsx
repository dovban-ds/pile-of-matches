import React from "react";
import Main from "./pages/Main";
import { GameProvider } from "./providers/gameState.provider";

function App() {
  return (
    <>
      <GameProvider>
        <Main />
      </GameProvider>
    </>
  );
}

export default App;
