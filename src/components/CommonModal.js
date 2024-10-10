import React from "react";

const CommonModal = ({ open, close, children }) => {
  return (
    <div className="modalContainer">
      <div className="modalBody">{children}</div>
    </div>
  );
};

export default CommonModal;
