import { ReactElement, useState, FC, useContext } from "react";
import CustomGame from "./customGame.modal";
import { GameContext } from "../../providers/gameState.provider";
import { TypeGeneralGame } from "../../types/main.types";

const HeaderMenu: () => ReactElement = (): ReactElement => {
  const [rulesModal, setRulesModal] = useState<boolean>(false);
  const [customGameModal, setCustomGameModal] = useState<boolean>(false);
  const { gameState, setGameState } = useContext<TypeGeneralGame>(GameContext);

  const handleClick: () => void = (): void => {
    setRulesModal(true);
  };

  return (
    <div className="menu">
      <button className="rules" onClick={handleClick}>
        Rules
      </button>
      {gameState.matches === 25 && (
        <button
          className="custom-game"
          onClick={(): void => {
            setCustomGameModal(true);
          }}
        >
          Custom game
        </button>
      )}
      {gameState.matches !== 25 && (
        <button
          className="rules"
          onClick={(): void => {
            setGameState({ matches: 25, numbs: [], aiNumbs: [] });
          }}
        >
          Restart
        </button>
      )}
      {customGameModal && (
        <CustomGame setCustomGameModal={setCustomGameModal} />
      )}
      {rulesModal && (
        <div
          className="modal"
          onClick={(): void => {
            setRulesModal(false);
          }}
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">
              <p>Pile of Matches</p>
              <div
                onClick={(): void => {
                  setRulesModal(false);
                }}
              >
                ✖️
              </div>
            </div>
            <div className="modal-body">
              Two people are playing a game. From the pile of 25 matches, each
              player takes either 1, 2 or 3 matches on each turn. The game is
              over once all matches are taken. Whoever has the even amount of
              matches wins.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
