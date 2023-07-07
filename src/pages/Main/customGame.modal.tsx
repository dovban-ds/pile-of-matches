import { ReactElement, FC, useState } from "react";

const CustomGame: FC<any> = ({
  setCustomGameModal,
  setGameState,
}: any): ReactElement => {
  const [value, setValue] = useState<any>("");

  const handleSubmit = () => {
    if (!(value % 2)) {
      const oddValue = +value + 1;
      setGameState({
        matches: oddValue,
        numbs: [],
        aiNumbs: [],
      });
    } else {
      setGameState({
        matches: value,
        numbs: [],
        aiNumbs: [],
      });
    }
  };

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
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <p>
            ... otherwise, the system adds a number to your figure. Still not
            all your rules are welcome here!
          </p>
          <hr></hr>
          <input
            type="number"
            placeholder="Maximum matches to carry (number)"
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
          ></input>
          <p>... we can take endless amount of matches: from 1 to ...</p>
          <button
            className="modal-btn"
            onClick={handleSubmit}
            ///////////////////////////////////////////////////////////////
          >
            Start the battle!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomGame;
