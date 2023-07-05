const aiLogic: any = (
  matches: any,
  amount: any,
  aiNumbs: any,
  setAiNumbs: any,
  setMatches: any
): any => {
  if (matches === 6) {
    setMatches(matches - 2);
    return setAiNumbs([...aiNumbs, 2]);
  } else if (matches === 3) {
    const even = aiNumbs.reduce((acc: any, item: any) => acc + item, 0);
    if (even % 2 === 0) {
      setMatches(matches - 2);
      return setAiNumbs([...aiNumbs, 2]);
    }
    setMatches(matches - 3);
    return setAiNumbs([...aiNumbs, 3]);
  } else if (matches === 2) {
    const even = aiNumbs.reduce((acc: any, item: any) => acc + item, 0);
    if (even % 2 !== 0) {
      setMatches(matches - 1);
      return setAiNumbs([...aiNumbs, 1]);
    }
    setMatches(matches - 2);
    return setAiNumbs([...aiNumbs, 2]);
  } else if (amount === 3 && matches !== 0) {
    setMatches(matches - 1);
    return setAiNumbs([...aiNumbs, 1]);
  } else if (amount === 2 && matches !== 0) {
    setMatches(matches - 2);
    return setAiNumbs([...aiNumbs, 2]);
  } else if (amount === 1 && matches !== 0) {
    setMatches(matches - 3);
    return setAiNumbs([...aiNumbs, 3]);
  }
};

export default aiLogic;
