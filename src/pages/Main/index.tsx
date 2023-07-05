import React, { FC, ReactElement, useState } from "react";
import "./index.style.css";

const Main: FC<any> = (): ReactElement => {
  const [count, setCount] = useState("25");
  return (
    <div className="main">
      <div className="ai">
        <div className="emoji">🤖</div>
      </div>
      <div className="central-block">
        <p className="counter">{count}</p>
        <div className="emoji-spec">🔥</div>
      </div>
      <div className="player">
        <div className="emoji">👨🏻</div>
      </div>
    </div>
  );
};

export default Main;
