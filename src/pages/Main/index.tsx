import React, { FC, ReactElement, useEffect, useState } from "react";
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
        <p className="counter">{count}</p>
        <div className="emoji-spec">🔥</div>
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
