import { FC, ReactElement } from "react";

const WinnerModal: FC<any> = ({ numbs }: any): ReactElement => {
  const even = numbs.reduce((acc: any, item: any) => acc + item, 0);
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-title">Congratulation! The winner is:</div>
        <div className="modal-body">
          {even % 2 === 0 ? (
            <p className="emoji">👨🏻</p>
          ) : (
            <p className="emoji">🤖</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;
