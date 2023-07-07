import { ReactElement, FC, useState, useContext } from "react";
import { GameContext } from "../../providers/gameState.provider";

const CustomGame: FC<any> = ({ setCustomGameModal }: any): ReactElement => {
  const [value, setValue] = useState<any>({
    nValue: "",
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
    const oddValue = 2 * +value.nValue + 1;
    if (oddValue === 25) {
      alert("Try to choose what not already there");
    } else if (!value.nValue || !value.maxToCarry) {
      alert("Please, fill both gaps!");
    } else if (value.maxToCarry >= 2 * value.nValue + 1) {
      alert("Matches maximum value should me less then 2n+1 expression");
    } else if (+value.maxToCarry <= 0 || +value.nValue <= 0) {
      alert("Do not use 0 or negative in your answers!");
    } else {
      setGameState({
        matches: oddValue,
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
            name="nValue"
            placeholder="Choose the n for 2n + 1 expression"
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
            value={value.nValue}
            onChange={handleChange}
          />
          <p>
            ... there are 2n + 1 matches in the pile. U can adjust the n param,
            so what it'll be?
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
