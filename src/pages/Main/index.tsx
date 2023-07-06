import { FC, ReactElement, useState } from "react";
import "./index.style.css";
import Modal from "./question.modal";
import Score from "./score";
import WinnerModal from "./winner.modal";

const Main: FC<any> = (): ReactElement => {
  const [modal, setModal] = useState(false);

  const [gameState, setGameState] = useState<any>({
    matches: 25,
    numbs: [],
    aiNumbs: [],
  });

  const handleClick = () => {
    setModal(true);
  };

  return (
    <div className="main">
      <div className="ai">
        <div className="emoji">🤖</div>
        <Score gameState={gameState} playerType="ai" />
      </div>
      <div className="central-block" onClick={handleClick}>
        {gameState.matches === 25 ? (
          <p className="init-text">Start the battle!</p>
        ) : (
          <p className="init-text">Get more!</p>
        )}
        <div className="emoji-spec">🔥</div>
        <p className="counter">{gameState.matches}</p>
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
      {gameState.matches === 0 && <WinnerModal numbs={gameState.numbs} />}
    </div>
  );
};

export default Main;
