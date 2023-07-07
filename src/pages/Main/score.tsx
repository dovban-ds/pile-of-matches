import { FC, ReactElement, useContext } from "react";
import { TypeScoreProps, PlayersRoles } from "../../types/main.types";
import { GameContext } from "../../providers/gameState.provider";

const Score: FC<TypeScoreProps> = ({
  playerType,
}: TypeScoreProps): ReactElement => {
  const { gameState } = useContext(GameContext);
  return (
    <div className="box">
      {playerType === PlayersRoles.ai
        ? gameState.aiNumbs &&
          gameState.aiNumbs.map(
            (item: number, id: number): ReactElement => (
              <div className="box-inner" key={id}>
                <div className="emoji-spec-small">🔥</div>
                <p className="counter-small">{item}</p>
              </div>
            )
          )
        : gameState.numbs &&
          gameState.numbs.map(
            (item: number, id: number): ReactElement => (
              <div className="box-inner" key={id}>
                <div className="emoji-spec-small">🔥</div>
                <p className="counter-small">{item}</p>
              </div>
            )
          )}
    </div>
  );
};

export default Score;
