import { FC, ReactElement } from "react";
import aiLogic from "../../api/aiLogic";

const Modal: FC<any> = ({
  matches,
  setMatches,
  offModal,
  setNumbs,
  numbs,
  aiNumbs,
  setAiNumbs,
}: any): ReactElement => {
  const handleClick = (amount: any) => {
    setNumbs([...numbs, amount]);
    setMatches(matches - amount);
    aiLogic(matches - amount, amount, aiNumbs, setAiNumbs, setMatches);
    return offModal(false);
  };
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-title">{matches} matches in a piled</div>
        <div className="modal-body">
          <p>I am strong enough to carry ...</p>
          <div className="buttons-bar">
            <button
              id="one"
              onClick={() => {
                handleClick(1);
              }}
            >
              1
            </button>
            {matches >= 2 && (
              <button
                id="two"
                onClick={() => {
                  handleClick(2);
                }}
              >
                2
              </button>
            )}
            {matches >= 3 && (
              <button
                id="three"
                onClick={() => {
                  handleClick(3);
                }}
              >
                3
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
