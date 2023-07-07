import { FC, ReactElement, useContext } from "react";
import { GameContext } from "../../providers/gameState.provider";

const WinnerModal: FC<any> = (): ReactElement => {
  const { gameState, setGameState } = useContext(GameContext);
  const even: number = gameState.numbs.reduce(
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
