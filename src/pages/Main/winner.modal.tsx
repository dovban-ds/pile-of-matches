import { FC, ReactElement } from "react";

const WinnerModal: FC<any> = ({
  numbs,
  gameState,
  setGameState,
}): ReactElement => {
  const even: number = numbs.reduce(
    (acc: number, item: number): number => acc + item,
    0
  );
  return (
    <div
      className="modal"
      onClick={() => {
        setGameState({
          matches: 25,
          numbs: [],
          aiNumbs: [],
        });
      }}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <p>Congratulation! The winner is:</p>
          <div
            className="spec-cross"
            onClick={() => {
              setGameState({
                matches: 25,
                numbs: [],
                aiNumbs: [],
              });
            }}
          >
            ✖️
          </div>
        </div>
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
