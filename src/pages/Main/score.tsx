import { FC, ReactElement } from "react";
import { TypeScoreProps } from "../../types/main.types";

const Score: FC<TypeScoreProps> = ({
  gameState,
  playerType,
}: TypeScoreProps): ReactElement => {
  return (
    <div className="box">
      {playerType === "ai"
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
