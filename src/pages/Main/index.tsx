import { FC, ReactElement, useState } from "react";
import "./index.style.css";
import Modal from "./question.modal";
import Score from "./score";
import WinnerModal from "./winner.modal";

const Main: FC<any> = (): ReactElement => {
  const [count, setCount] = useState(25);
  const [modal, setModal] = useState(false);
  const [numbs, setNumbs] = useState([]);
  const [aiNumbs, setAiNumbs] = useState([]);

  const handleClick = () => {
    setModal(true);
  };

  return (
    <div className="main">
      <div className="ai">
        <div className="emoji">🤖</div>
        <Score numbs={numbs} aiNumbs={aiNumbs} playerType="ai" />
      </div>
      <div className="central-block" onClick={handleClick}>
        {count === 25 ? (
          <p className="init-text">Start the battle!</p>
        ) : (
          <p className="init-text">Get more!</p>
        )}
        <div className="emoji-spec">🔥</div>
        <p className="counter">{count}</p>
      </div>
      <div className="player">
        <div className="emoji">👨🏻</div>
        <Score numbs={numbs} aiNumbs={aiNumbs} playerType="human" />
      </div>
      {modal && (
        <Modal
          matches={count}
          setMatches={setCount}
          offModal={setModal}
          setNumbs={setNumbs}
          numbs={numbs}
          aiNumbs={aiNumbs}
          setAiNumbs={setAiNumbs}
        />
      )}
      {count === 0 && <WinnerModal numbs={numbs} />}
    </div>
  );
};

export default Main;
