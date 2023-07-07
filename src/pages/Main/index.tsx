import { ReactElement, useState, useContext } from "react";
import "./index.style.css";
import Modal from "./question.modal";
import Score from "./score";
import WinnerModal from "./winner.modal";
import { aiFirstTurnLogic } from "../../api/aiLogic";
import { PlayersRoles } from "../../types/main.types";
import HeaderMenu from "./headerMenu";
import { GameContext } from "../../providers/gameState.provider";

const Main = (): ReactElement => {
  const [modal, setModal] = useState<boolean>(false);
  const { gameState, setGameState } = useContext(GameContext);
  const { matches, numbs } = gameState;

  const handleClick = (): void => {
    setModal(true);
  };

  return (
    <div className="general-container">
      <HeaderMenu />
      <div className="main">
        <div className="ai">
          <div className="emoji">🤖</div>
          <Score playerType={PlayersRoles.ai} />
        </div>
        <div className="central-block">
          {!numbs.length ? (
            <p className="init-text btn" onClick={handleClick}>
              Take your first!
            </p>
          ) : (
            <p className="init-text btn" onClick={handleClick}>
              Get more!
            </p>
          )}
          <div className="emoji-spec">🔥</div>
          <p className="counter">{matches}</p>
          {matches === 25 && (
            <button
              className="init-text btn"
              onClick={(): void => {
                aiFirstTurnLogic(setGameState);
              }}
            >
              Succumb to AI
            </button>
          )}
        </div>
        <div className="player">
          <div className="emoji">👨🏻</div>
          <Score playerType={PlayersRoles.player} />
        </div>
        {modal && <Modal offModal={setModal} />}
        {matches === 0 && <WinnerModal />}
      </div>
    </div>
  );
};

export default Main;
