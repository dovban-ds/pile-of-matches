const aiLogic: any = (
  matches: any,
  aiNumbs: any,
  setAiNumbs: any,
  setMatches: any
): any => {
  if ((matches - 3) % 2 !== 0 && matches >= 3) {
    setMatches(matches - 3);
    return setAiNumbs([...aiNumbs, 3]);
  } else if ((matches - 2) % 2 !== 0 && matches >= 2) {
    setMatches(matches - 2);
    return setAiNumbs([...aiNumbs, 2]);
  } else if (matches === 1) {
    setMatches(matches - 1);
    return setAiNumbs([...aiNumbs, 1]);
  } else {
    return;
  }
};

export default aiLogic;
