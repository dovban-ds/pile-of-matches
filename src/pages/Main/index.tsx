import { ReactElement, useState, FC } from "react";
import "./index.style.css";
import Modal from "./question.modal";
import Score from "./score";
import WinnerModal from "./winner.modal";
import { aiFirstTurnLogic } from "../../api/aiLogic";
import { PlayersRoles, TypeInitState } from "../../types/main.types";
import HeaderMenu from "./headerMenu";

const Main = (): ReactElement => {
  const [modal, setModal] = useState<boolean>(false);
  const [gameState, setGameState] = useState<TypeInitState>({
    matches: 25,
    numbs: [],
    aiNumbs: [],
  });

  const { matches, aiNumbs } = gameState;

  const handleClick = (): void => {
    setModal(true);
  };

  return (
    <div className="general-container">
      <HeaderMenu matches={matches} setGameState={setGameState} />
      <div className="main">
        <div className="ai">
          <div className="emoji">🤖</div>
          <Score gameState={gameState} playerType={PlayersRoles.ai} />
        </div>
        <div className="central-block">
          {matches === 25 ? (
            <p className="init-text btn" onClick={handleClick}>
              Start the battle!
            </p>
          ) : (
            <p className="init-text btn" onClick={handleClick}>
              Get more!
            </p>
          )}
          <div className="emoji-spec">🔥</div>
          <p className="counter">{matches}</p>
          {!aiNumbs.length && (
            <button
              className="init-text btn"
              onClick={(): void => {
                aiFirstTurnLogic(matches, gameState, setGameState);
              }}
            >
              Succumb to AI
            </button>
          )}
        </div>
        <div className="player">
          <div className="emoji">👨🏻</div>
          <Score gameState={gameState} playerType={PlayersRoles.player} />
        </div>
        {modal && (
          <Modal
            offModal={setModal}
            gameState={gameState}
            setGameState={setGameState}
          />
        )}
        {matches === 0 && (
          <WinnerModal gameState={gameState} setGameState={setGameState} />
        )}
      </div>
    </div>
  );
};

export default Main;
