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

export const aiSpecLogic: any = (
  gameState: any,
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>
) => {
  let firstNumb = gameState.matches - +gameState.maxToCarry;
  let secondNumb = gameState.matches - (+gameState.maxToCarry - 2);

  if (!(gameState.maxToCarry % 2)) {
    firstNumb = gameState.matches - (+gameState.maxToCarry - 1);
    secondNumb = gameState.matches - (+gameState.maxToCarry - 3);
  }

  if (firstNumb <= 0 || secondNumb <= 0) return;

  if (!(secondNumb % 4) || secondNumb % 4 === 1) {
    return setGameState((gameState: any): any => ({
      ...gameState,
      aiNumbs: [...gameState.aiNumbs, +gameState.maxToCarry - 2],
      matches: gameState.matches - (+gameState.maxToCarry - 2),
    }));
  } else if (!(firstNumb % 4) || firstNumb % 4 === 1) {
    return setGameState((gameState: any): any => ({
      ...gameState,
      aiNumbs: [...gameState.aiNumbs, +gameState.maxToCarry],
      matches: gameState.matches - +gameState.maxToCarry,
    }));
  }
};
