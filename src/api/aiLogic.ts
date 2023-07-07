import { TypeAiLogic, TypeInitState } from "../types/main.types";

export const aiLogic: TypeAiLogic = (
  matches: number,
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>
) => {
  const three = matches - 3;
  const one = matches - 1;

  if (!(one % 4) || one % 4 === 1) {
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 1],
        matches: gameState.matches - 1,
      })
    );
  } else if (!(three % 4) || three % 4 === 1) {
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 3],
        matches: gameState.matches - 3,
      })
    );
  }
};

export const aiFirstTurnLogic = (
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>
): void => {
  setGameState(
    (gameState: TypeInitState): TypeInitState => ({
      ...gameState,
      aiNumbs: [...gameState.aiNumbs, 1],
      matches: gameState.matches - 1,
    })
  );
};
