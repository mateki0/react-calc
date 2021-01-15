import * as React from "react";
import "./styles/Buttons.scss";
const Buttons = ({
  handleClickNumber,
  handleEqual,
  handleAdd,
  handleSubtraction,
  handleClean,
  handleDivide,
  handleMultiplication,
  handlePercentage,
  handlePlusNegative,
}) => {
  return (
    <div className="buttons-wrapper">
      <div className="single-buttons-row">
        <button
          className="single-button light-gray-button"
          onClick={handleClean}
        >
          AC
        </button>
        <button
          className="single-button light-gray-button"
          onClick={handlePlusNegative}
        >
          +/-
        </button>
        <button
          className="single-button light-gray-button"
          onClick={handlePercentage}
        >
          %
        </button>
        <button
          className="single-button basic-operations-buttons"
          onClick={handleDivide}
        >
          /
        </button>
      </div>
      <div className="single-buttons-row">
        <button
          className="single-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          7
        </button>
        <button
          className="single-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          8
        </button>
        <button
          className="single-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          9
        </button>
        <button
          className="single-button basic-operations-buttons"
          onClick={handleMultiplication}
        >
          X
        </button>
      </div>
      <div className="single-buttons-row">
        <button
          className="single-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          4
        </button>
        <button
          className="single-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          5
        </button>
        <button
          className="single-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          6
        </button>
        <button
          className="single-button basic-operations-buttons"
          onClick={handleSubtraction}
        >
          -
        </button>
      </div>

      <div className="single-buttons-row ">
        <button
          className="single-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          1
        </button>
        <button
          className="single-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          2
        </button>
        <button
          className="single-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          3
        </button>
        <button
          className="single-button basic-operations-buttons"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div className="single-buttons-row ">
        <button
          className="single-button zero-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          0
        </button>
        <button
          className="single-button number-buttons"
          onClick={(e) => handleClickNumber(e)}
        >
          .
        </button>
        <button
          className="single-button basic-operations-buttons"
          onClick={handleEqual}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Buttons;
