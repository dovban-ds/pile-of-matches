import React, { FC, ReactElement, useState } from "react";
import "./index.style.css";
import Modal from "./main.modal";

const Main: FC<any> = (): ReactElement => {
  const [count, setCount] = useState("25");
  const [modal, setModal] = useState(false);

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
      </div>
      {modal ? <Modal matches={count} /> : null}
    </div>
  );
};

export default Main;
