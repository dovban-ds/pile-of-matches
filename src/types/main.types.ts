export type TypeInitState = {
  matches: number;
  numbs: number[];
  aiNumbs: number[];
  maxToCarry?: null | number | undefined;
};

export type TypeModalProps = {
  offModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

export type TypeScoreProps = {
  playerType: PlayersRoles;
};

export type TypeAiLogic = (
  matches: number,
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>,
  amount?: number,
  gameState?: TypeInitState
) => TypeInitState | void | React.Dispatch<React.SetStateAction<TypeInitState>>;

export const enum PlayersRoles {
  ai,
  player,
}

export type TypeGeneralGame = {
  gameState: TypeInitState;
  setGameState: React.Dispatch<React.SetStateAction<TypeInitState>>;
};
