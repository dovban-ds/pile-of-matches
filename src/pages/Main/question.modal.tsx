import { FC, ReactElement, useContext } from "react";
import { aiLogic } from "../../api/aiLogic";
import {
  TypeGeneralGame,
  TypeInitState,
  TypeModalProps,
} from "../../types/main.types";
import { GameContext } from "../../providers/gameState.provider";
import SpecQuestionModal from "./specQuestion.modal";

const Modal: FC<TypeModalProps> = ({
  offModal,
}: TypeModalProps): ReactElement => {
  const { gameState, setGameState } = useContext(GameContext);

  const handleClick: (amount: number) => void = (amount: number): void => {
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
      onClick={(): void => {
        offModal(false);
      }}
    >
      <div className="modal-box" onClick={(e): void => e.stopPropagation()}>
        <div className="modal-title">
          <p>{gameState.matches} matches in a pile</p>
          <div
            onClick={(): void => {
              offModal(false);
            }}
          >
            ✖️
          </div>
        </div>
        <div className="modal-body">
          <p>I am strong enough to carry ...</p>
          {gameState.maxToCarry ? (
            <SpecQuestionModal offModal={offModal} />
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
