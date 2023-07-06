import { ReactElement, useState, FC } from "react";

const HeaderMenu: FC<any> = (): ReactElement => {
  const [rulesModal, setRulesModal] = useState(false);

  const handleClick = () => {
    setRulesModal(true);
  };

  return (
    <div className="menu">
      <button className="rules" onClick={handleClick}>
        Rules
      </button>
      <button className="custom-game">Custom game</button>
      {rulesModal && (
        <div
          className="modal"
          onClick={() => {
            setRulesModal(false);
          }}
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">
              <p>Pile of Matches</p>
              <div
                onClick={() => {
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
