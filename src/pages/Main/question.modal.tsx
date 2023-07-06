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

    aiLogic(gameState.matches - amount, gameState, amount, setGameState);
    return offModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-title">
          {gameState.matches} matches in a piled
        </div>
        <div className="modal-body">
          <p>I am strong enough to carry ...</p>
          <div className="buttons-bar">
            <button
              onClick={(): void => {
                handleClick(1);
              }}
            >
              1
            </button>
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
