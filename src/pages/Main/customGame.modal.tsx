import { ReactElement, FC } from "react";

const CustomGame: FC<any> = ({ setCustomGameModal }: any): ReactElement => {
  return (
    <div
      className="modal"
      onClick={() => {
        setCustomGameModal(false);
      }}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <p>Set up your own rules!</p>
          <div
            onClick={() => {
              setCustomGameModal(false);
            }}
          >
            ✖️
          </div>
        </div>
        <div className="modal-body">
          <input
            type="number"
            placeholder="Matches in a pile (odd number)"
          ></input>
          <p>
            ... otherwise, the system adds a number to your figure. Still not
            all your rules are welcome here!
          </p>
          <hr></hr>
          <input
            type="number"
            placeholder="Maximum matches to carry (number)"
          ></input>
          <p>... we can take endless amount of matches: from 1 to ...</p>
          <button className="modal-btn">Start the battle!</button>
        </div>
      </div>
    </div>
  );
};

export default CustomGame;
