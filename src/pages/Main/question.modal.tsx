import { FC, ReactElement } from "react";
import { aiLogic } from "../../api/aiLogic";

const Modal: FC<any> = ({
  offModal,
  gameState,
  setGameState,
}: any): ReactElement => {
  const handleClick = (amount: any) => {
    setGameState((prevState: any) => ({
      ...prevState,
      numbs: [...gameState.numbs, amount],
      matches: gameState.matches - amount,
    }));

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
              onClick={() => {
                handleClick(1);
              }}
            >
              1
            </button>
            {gameState.matches >= 2 && (
              <button
                onClick={() => {
                  handleClick(2);
                }}
              >
                2
              </button>
            )}
            {gameState.matches >= 3 && (
              <button
                onClick={() => {
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
