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

export type TypeAiLogic = (
  matches: number,
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>,
  amount?: number
) => TypeInitState | void | React.Dispatch<React.SetStateAction<TypeInitState>>;

export const enum PlayersRoles {
  ai,
  player,
}
