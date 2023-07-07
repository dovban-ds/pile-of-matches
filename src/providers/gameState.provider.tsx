import { createContext, useState, ReactElement, FC, Context } from "react";
import { TypeGeneralGame, TypeInitState } from "../types/main.types";

export const GameContext: Context<TypeGeneralGame> =
  createContext<TypeGeneralGame>({
    gameState: {
      matches: 25,
      numbs: [],
      aiNumbs: [],
      maxToCarry: null,
    },
    setGameState: (): void => {},
  });

export const GameProvider: ({ children }: any) => ReactElement = ({
  children,
}: any): ReactElement => {
  const [gameState, setGameState] = useState<TypeInitState>({
    matches: 25,
    numbs: [],
    aiNumbs: [],
    maxToCarry: null,
  });

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};
