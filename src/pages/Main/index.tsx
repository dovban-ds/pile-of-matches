import { FC, ReactElement, useState } from "react";
import "./index.style.css";
import Modal from "./question.modal";
import Score from "./score";
import WinnerModal from "./winner.modal";
import { aiFirstTurnLogic } from "../../api/aiLogic";

const Main: FC<any> = (): ReactElement => {
  const [modal, setModal] = useState(false);
  const [gameState, setGameState] = useState<any>({
    matches: 25,
    numbs: [],
    aiNumbs: [],
  });

  const { matches, numbs, aiNumbs } = gameState;

  const handleClick = () => {
    setModal(true);
  };

  return (
    <div className="main">
      <div className="ai">
        <div className="emoji">🤖</div>
        <Score gameState={gameState} playerType="ai" />
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
            onClick={() => {
              aiFirstTurnLogic(matches, gameState, setGameState);
            }}
          >
            Succumb to AI
          </button>
        )}
      </div>
      <div className="player">
        <div className="emoji">👨🏻</div>
        <Score gameState={gameState} playerType="human" />
      </div>
      {modal && (
        <Modal
          offModal={setModal}
          gameState={gameState}
          setGameState={setGameState}
        />
      )}
      {matches === 0 && <WinnerModal numbs={numbs} />}
    </div>
  );
};

export default Main;
