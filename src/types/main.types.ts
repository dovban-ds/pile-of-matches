export type TypeInitState = {
  matches: number;
  numbs: number[];
  aiNumbs: number[];
};

export type TypeModalProps = {
  offModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  gameState: TypeInitState;
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>;
};

export type TypeScoreProps = {
  gameState: TypeInitState;
  playerType: PlayersRoles;
};

export const enum PlayersRoles {
  ai,
  player,
}
