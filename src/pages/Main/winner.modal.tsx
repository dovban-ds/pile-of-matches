import { FC, ReactElement } from "react";

const WinnerModal: FC<{ numbs: number[] }> = ({ numbs }): ReactElement => {
  const even: number = numbs.reduce(
    (acc: number, item: number): number => acc + item,
    0
  );
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-title">Congratulation! The winner is:</div>
        <div className="modal-body">
          {even % 2 === 0 ? (
            <p className="emoji">👨🏻</p>
          ) : (
            <p className="emoji">🤖</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;
