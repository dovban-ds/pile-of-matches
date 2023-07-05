import { FC, ReactElement, useState } from "react";

const Score: FC<any> = ({ numbs }: any): ReactElement => {
  return (
    <div className="box">
      {numbs &&
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
