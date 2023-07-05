import { FC, ReactElement, useState } from "react";
import "./index.style.css";
import Modal from "./question.modal";
import Score from "./humanScore";

const Main: FC<any> = (): ReactElement => {
  const [count, setCount] = useState(25);
  const [modal, setModal] = useState(false);
  const [numbs, setNumbs] = useState([]);

  const handleClick = () => {
    setModal(true);
  };

  return (
    <div className="main">
      <div className="ai">
        <div className="emoji">🤖</div>
      </div>
      <div className="central-block" onClick={handleClick}>
        {count === 25 && <p className="init-text">Start the battle!</p>}
        <div className="emoji-spec">🔥</div>
        <p className="counter">{count}</p>
      </div>
      <div className="player">
        <div className="emoji">👨🏻</div>
        <Score numbs={numbs} />
      </div>
      {modal && (
        <Modal
          matches={count}
          setMatches={setCount}
          offModal={setModal}
          setNumbs={setNumbs}
          numbs={numbs}
        />
      )}
    </div>
  );
};

export default Main;
