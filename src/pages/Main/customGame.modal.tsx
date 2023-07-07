import { ReactElement, FC, useState, useContext } from "react";
import { GameContext } from "../../providers/gameState.provider";

const CustomGame: FC<any> = ({ setCustomGameModal }: any): ReactElement => {
  const [value, setValue] = useState<any>({
    maxMatches: "",
    maxToCarry: "",
  });
  const { setGameState } = useContext(GameContext);

  const handleChange = (event: any) => {
    setValue((prevState: any) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!value.maxToCarry || !value.maxMatches) {
      alert("Please, fill both gaps!");
    } else if (!(value.maxMatches % 2)) {
      const oddValue = +value.maxMatches + 1;
      setGameState({
        matches: oddValue,
        numbs: [],
        aiNumbs: [],
        maxToCarry: value.maxToCarry,
      });
      setCustomGameModal(false);
    } else {
      setGameState({
        matches: value.maxMatches,
        numbs: [],
        aiNumbs: [],
        maxToCarry: value.maxToCarry,
      });
      setCustomGameModal(false);
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
            name="maxMatches"
            placeholder="Matches in a pile (odd number)"
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
            value={value.maxMatches}
            onChange={handleChange}
          />
          <p>
            ... otherwise, the system adds a number to your figure. Still not
            all your rules are welcome here!
          </p>
          <hr></hr>
          <input
            type="number"
            name="maxToCarry"
            placeholder="Maximum matches to carry (number)"
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
            value={value.maxToCarry}
            onChange={handleChange}
          />
          <p>... we can take an endless amount of matches: from 1 to ...</p>
          <button className="modal-btn" onClick={handleSubmit}>
            Start the battle!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomGame;
