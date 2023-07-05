import { FC, ReactElement } from "react";

const Score: FC<any> = ({ numbs, aiNumbs, playerType }: any): ReactElement => {
  return (
    <div className="box">
      {playerType === "ai"
        ? aiNumbs &&
          aiNumbs.map(
            (item: any, id: number): ReactElement => (
              <div className="box-inner" key={id}>
                <div className="emoji-spec-small">🔥</div>
                <p className="counter-small">{item}</p>
              </div>
            )
          )
        : numbs &&
          numbs.map(
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
