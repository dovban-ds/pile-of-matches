import React, { ChangeEvent } from "react";
import { useContext, useState, FC, ReactElement } from "react";
import { GameContext } from "../../providers/gameState.provider";
import { aiSpecLogic } from "../../api/aiLogic";
import { TypeGeneralGame, TypeModalProps } from "../../types/main.types";

const SpecQuestionModal: FC<TypeModalProps> = ({
  offModal,
}: TypeModalProps): ReactElement => {
  const { gameState, setGameState } = useContext(GameContext);
  const [takenMatches, setTakenMatches] = useState<number>(0);

  const handleChange: (e: ChangeEvent<any>) => void = (
    e: React.ChangeEvent<any>
  ): void => {
    setTakenMatches(e.target.value);
  };

  const handleClick: () => void = (): void => {
    if (takenMatches > +gameState.maxToCarry! || takenMatches < 1) {
      return alert(`Enter values from 1 to ${gameState.maxToCarry}`);
    } else if (takenMatches > gameState.matches) {
      alert("Stop kidding me!");
    } else {
      setGameState({
        ...gameState,
        matches: gameState.matches - +takenMatches,
        numbs: [...gameState.numbs, +takenMatches],
      });
      aiSpecLogic(gameState.matches - +takenMatches, gameState, setGameState);
      offModal(false);
    }
  };

  return (
    <div className="spec-modal">
      <input
        type="number"
        name="humanAmount"
        placeholder="Take it finally!"
        onKeyDown={(e: any): any =>
          ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
        }
        value={takenMatches}
        onChange={handleChange}
      />
      <p>
        But be careful: u can take only in a range from 1 to{" "}
        {gameState.maxToCarry}...
      </p>
      <button className="spec-btn" onClick={handleClick}>
        Take!
      </button>
    </div>
  );
};

export default SpecQuestionModal;
