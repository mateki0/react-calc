import * as React from "react";
import "./styles/CalcScreen.scss";

const CalcScreen = ({ value, historyValue, handleValueChange, fontSize }) => {
  return (
    <div className="calc-screen">
      <div className="history-display">{historyValue}</div>
      <input
        style={{ fontSize: fontSize + "px" }}
        className="screen-input"
        name="screen"
        placeholder="0"
        value={value}
        onChange={(value) => handleValueChange(value)}
      />
    </div>
  );
};

export default CalcScreen;
