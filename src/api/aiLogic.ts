import { TypeAiLogic, TypeInitState } from "../types/main.types";

export const aiLogic: TypeAiLogic = (
  matches: number,
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>
): void => {
  const three: number = matches - 3;
  const one: number = matches - 1;

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

export const aiFirstTurnLogic: (
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>
) => void = (
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
  matches: number,
  gameState: TypeInitState,
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>
): void => {
  const { maxToCarry, aiNumbs } = gameState;

  if (+maxToCarry! <= 1) {
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...aiNumbs, +maxToCarry!],
        matches: gameState.matches - +maxToCarry!,
      })
    );
  }

  let firstNumb: number = matches - +maxToCarry!;
  let secondNumb: number = matches - (+maxToCarry! - 2);

  if (!(maxToCarry! % 2)) {
    firstNumb = matches - (+maxToCarry! - 1);
    secondNumb = matches - (+maxToCarry! - 3);
  }

  if (matches < maxToCarry!) {
    if (!(matches % 2)) {
      firstNumb = matches - (matches - 1);
      secondNumb = matches - (matches - 3);
    } else {
      firstNumb = matches - matches;
      secondNumb = matches - (matches - 2);
    }

    if (!(secondNumb % 4) || secondNumb % 4 === 1) {
      return setGameState(
        (gameState: TypeInitState): TypeInitState => ({
          ...gameState,
          aiNumbs: [...aiNumbs, matches - 2],
          matches: gameState.matches - (matches - 2),
        })
      );
    } else if (!(firstNumb % 4) || firstNumb % 4 === 1) {
      return setGameState((gameState: any): any => ({
        ...gameState,
        aiNumbs: [...aiNumbs, matches],
        matches: gameState.matches - matches,
      }));
    }
  }

  if (firstNumb <= 0 || secondNumb <= 0) return;

  if (!(secondNumb % 4) || secondNumb % 4 === 1) {
    return setGameState(
      (gameState: TypeInitState): TypeInitState => ({
        ...gameState,
        aiNumbs: [...aiNumbs, +maxToCarry! - 2],
        matches: gameState.matches - (+maxToCarry! - 2),
      })
    );
  } else if (!(firstNumb % 4) || firstNumb % 4 === 1) {
    return setGameState((gameState: any): any => ({
      ...gameState,
      aiNumbs: [...aiNumbs, +maxToCarry!],
      matches: gameState.matches - +maxToCarry!,
    }));
  }
};
