import { createContext, useState, ReactNode } from "react";

interface GameState {
  matches: number;
  numbs: number[];
  aiNumbs: number[];
  maxToCarry?: any;
}

interface GameContextProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

export const GameContext = createContext<GameContextProps>({
  gameState: {
    matches: 25,
    numbs: [],
    aiNumbs: [],
    maxToCarry: null,
  },
  setGameState: () => {},
});

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>({
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
