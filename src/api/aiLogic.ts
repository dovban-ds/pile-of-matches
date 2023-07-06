const aiLogic: any = (
  matches: any,
  gameState: any,
  amount: any,
  setGameState: any
): any => {
  if (matches === 7) {
    return setGameState((gameState: any) => ({
      ...gameState,
      aiNumbs: [...gameState.aiNumbs, 3],
      matches: gameState.matches - 3,
    }));
  } else if (matches === 3) {
    const even = gameState.aiNumbs.reduce(
      (acc: any, item: any) => acc + item,
      0
    );
    if (even % 2 === 0) {
      return setGameState((gameState: any) => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 2],
        matches: gameState.matches - 2,
      }));
    }
    return setGameState((gameState: any) => ({
      ...gameState,
      aiNumbs: [...gameState.aiNumbs, 3],
      matches: gameState.matches - 3,
    }));
  } else if (matches === 2) {
    const even = gameState.aiNumbs.reduce(
      (acc: any, item: any) => acc + item,
      0
    );
    if (even % 2 !== 0) {
      return setGameState((gameState: any) => ({
        ...gameState,
        aiNumbs: [...gameState.aiNumbs, 1],
        matches: gameState.matches - 1,
      }));
    }
    return setGameState((gameState: any) => ({
      ...gameState,
      aiNumbs: [...gameState.aiNumbs, 2],
      matches: gameState.matches - 2,
    }));
  } else if (amount === 3 && matches !== 0) {
    return setGameState((gameState: any): void => ({
      ...gameState,
      aiNumbs: [...gameState.aiNumbs, 1],
      matches: gameState.matches - 1,
    }));
  } else if (amount === 2 && matches !== 0) {
    return setGameState((gameState: any) => ({
      ...gameState,
      aiNumbs: [...gameState.aiNumbs, 2],
      matches: gameState.matches - 2,
    }));
  } else if (amount === 1 && matches !== 0) {
    return setGameState((gameState: any) => ({
      ...gameState,
      aiNumbs: [...gameState.aiNumbs, 3],
      matches: gameState.matches - 3,
    }));
  }
};

export default aiLogic;
