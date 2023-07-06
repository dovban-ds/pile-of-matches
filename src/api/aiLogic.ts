import { TypeAiLogic, TypeInitState } from "../types/main.types";

export const aiLogic: TypeAiLogic = (
  matches: number,
  gameState: TypeInitState,
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>,
  amount: number | undefined
) => {
  if (matches === 7) {
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 3],
        matches: gameState.matches - 3,
      })
    );
  } else if (matches === 6) {
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 2],
        matches: gameState.matches - 2,
      })
    );
  } else if (matches === 3) {
    const even: number = gameState.aiNumbs.reduce(
      (acc: number, item: number): number => acc + item,
      0
    );
    if (even % 2 === 0) {
      return setGameState(
        (gameState: TypeInitState): TypeInitState => ({
          ...gameState,
          aiNumbs: [...gameState.aiNumbs, 2],
          matches: gameState.matches - 2,
        })
      );
    }
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 3],
        matches: gameState.matches - 3,
      })
    );
  } else if (matches === 2) {
    const even: number = gameState.aiNumbs.reduce(
      (acc: number, item: number): number => acc + item,
      0
    );
    if (even % 2 !== 0) {
      return setGameState(
        (gameState: TypeInitState): TypeInitState => ({
          ...gameState,
          aiNumbs: [...gameState.aiNumbs, 1],
          matches: gameState.matches - 1,
        })
      );
    }
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 2],
        matches: gameState.matches - 2,
      })
    );
  } else if (amount === 3 && matches >= 3) {
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 1],
        matches: gameState.matches - 1,
      })
    );
  } else if (amount === 2 && matches >= 2) {
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 2],
        matches: gameState.matches - 2,
      })
    );
  } else if (amount === 1 && matches >= 1) {
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 3],
        matches: gameState.matches - 3,
      })
    );
  } else if (matches === 0) {
    return gameState;
  } else {
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 1],
        matches: gameState.matches - 1,
      })
    );
  }
};

export const aiFirstTurnLogic = (
  matches: number,
  gameState: TypeInitState,
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>
): void => {
  if (matches % 2 === 0 && matches > 3) {
    aiLogic(matches, gameState, setGameState, 1);
  } else if (matches % 2 !== 0 && matches >= 2) {
    aiLogic(matches, gameState, setGameState, 2);
  } else if (matches % 2 === 0 && matches > 1) {
    aiLogic(matches, gameState, setGameState, 3);
  }
};
