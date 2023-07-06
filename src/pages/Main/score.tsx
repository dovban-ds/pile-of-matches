import { FC, ReactElement } from "react";

const Score: FC<any> = ({ gameState, playerType }: any): ReactElement => {
  return (
    <div className="box">
      {playerType === "ai"
        ? gameState.aiNumbs &&
          gameState.aiNumbs.map(
            (item: any, id: number): ReactElement => (
              <div className="box-inner" key={id}>
                <div className="emoji-spec-small">🔥</div>
                <p className="counter-small">{item}</p>
              </div>
            )
          )
        : gameState.numbs &&
          gameState.numbs.map(
            (item: any, id: number): ReactElement => (
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
