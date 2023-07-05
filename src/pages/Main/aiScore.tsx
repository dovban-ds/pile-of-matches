import { FC, ReactElement, useState } from "react";

const AiScore: FC<any> = ({ aiNumbs }: any): ReactElement => {
  // const [aiNumbs, setAiNumbs] = useState<number[]>([]);
  // const aiLogic: any = (): any => {
  //   if ((matches - 3) % 2 === 0) {
  //     setAiNumbs([...aiNumbs, 3]);
  //   } else if ((matches - 2) % 2 === 0) {
  //     setAiNumbs([...aiNumbs, 2]);
  //   } else {
  //     setAiNumbs([...aiNumbs, 1]);
  //   }
  // };
  return (
    <div className="box">
      {aiNumbs &&
        aiNumbs.map(
          (item: any, id: number): ReactElement => (
            <div className="box-inner" key={id}>
              <div className="emoji-spec-small">🔥</div>
              <p className="counter-small">{item}</p>
            </div>
          )
        )}
    </div>
  );
};

export default AiScore;
