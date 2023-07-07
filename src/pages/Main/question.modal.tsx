import { FC, ReactElement } from "react";
import { aiLogic } from "../../api/aiLogic";
import { TypeInitState, TypeModalProps } from "../../types/main.types";

const Modal: FC<TypeModalProps> = ({
  offModal,
  gameState,
  setGameState,
}: TypeModalProps): ReactElement => {
  const handleClick = (amount: number): void => {
    setGameState(
      (prevState: TypeInitState): TypeInitState => ({
        ...prevState,
        numbs: [...gameState.numbs, amount],
        matches: gameState.matches - amount,
      })
    );

    aiLogic(gameState.matches - amount, setGameState);
    return offModal(false);
  };

  return (
    <div
      className="modal"
      onClick={() => {
        offModal(false);
      }}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <p>{gameState.matches} matches in a pile</p>
          <div
            onClick={() => {
              offModal(false);
            }}
          >
            ✖️
          </div>
        </div>
        <div className="modal-body">
          <p>I am strong enough to carry ...</p>
          <div className="buttons-bar">
            {gameState.matches >= 1 && (
              <button
                onClick={(): void => {
                  handleClick(1);
                }}
              >
                1
              </button>
            )}
            {gameState.matches >= 2 && (
              <button
                onClick={(): void => {
                  handleClick(2);
                }}
              >
                2
              </button>
            )}
            {gameState.matches >= 3 && (
              <button
                onClick={(): void => {
                  handleClick(3);
                }}
              >
                3
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
