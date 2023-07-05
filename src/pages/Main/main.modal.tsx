import React, { FC, ReactElement, useState } from "react";

const Modal: FC<any> = ({ matches }: any): ReactElement => {
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-title">{matches} matches in a piled</div>
        <div className="modal-body">
          <p>I am strong enough to carry ...</p>
          <div className="buttons-bar">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
