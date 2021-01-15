import * as React from "react";
import Buttons from "./Buttons";
import CalcScreen from "./CalcScreen";
import "./styles/CalculatorWrapper.scss";

const roundAccurately = (number, decimalPlaces) =>
  Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces);

const Calculator = () => {
  const [value, setValue] = React.useState("");
  const [historyValue, setHistoryValue] = React.useState(0);
  const [temporaryValue, setTemporaryValue] = React.useState(0);
  const [fontSize, setFontSize] = React.useState(56);
  const [lowerCount, setLowerCount] = React.useState(1);
  const [currentOperator, setCurrentOperator] = React.useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  React.useEffect(() => {
    if (value.length > 8 * lowerCount && fontSize > 16) {
      if (lowerCount === 1) {
        setFontSize(fontSize - 26);
        setLowerCount(lowerCount + 1);
      } else {
        setFontSize(fontSize - 14);
        setLowerCount(lowerCount + 1);
      }
    }
  }, [value]);

  React.useEffect(() => {
    setHistoryValue(temporaryValue + " " + currentOperator);
  }, [temporaryValue, currentOperator]);

  const handleClean = () => {
    setValue("");
    setTemporaryValue(0);
    setHistoryValue(0);
    setCurrentOperator("");
  };

  const handleEqual = () => {
    switch (currentOperator) {
      case "+":
        handleAdd();
        break;
      case "-":
        handleSubtraction();
        break;
      case "/":
        handleDivide();
        break;
      case "*":
        handleMultiplication();
        break;
      default:
        break;
    }
  };

  const handleClickNumber = (e) => {
    setValue(value + e.target.innerText);
  };

  const handleAdd = () => {
    console.log(currentOperator);
    setTemporaryValue(temporaryValue + parseFloat(value));
    setCurrentOperator("+");
    setValue("");
  };

  const handleSubtraction = () => {
    if (value !== "") {
      if (temporaryValue === 0) {
        setTemporaryValue(parseFloat(value));
      } else if (value !== "") {
        setTemporaryValue(
          roundAccurately(temporaryValue - parseFloat(value), 4)
        );
      }
      setValue("");
    } else {
      setValue("-");
    }
    setCurrentOperator("-");
  };

  const handleMultiplication = () => {
    if (temporaryValue === 0) {
      setTemporaryValue(parseFloat(value));
    } else if (value !== "") {
      setTemporaryValue(roundAccurately(temporaryValue * parseFloat(value), 4));
    }
    setCurrentOperator("*");
    setValue("");
  };

  const handleDivide = () => {
    if (temporaryValue === 0) {
      setTemporaryValue(parseFloat(value));
    } else if (value !== "") {
      setTemporaryValue(roundAccurately(temporaryValue / parseFloat(value), 4));
    }
    setCurrentOperator("/");
    setValue("");
  };

  const handlePercentage = () => {
    setTemporaryValue(parseFloat(value) / 100);
    setCurrentOperator("");
    setValue("");
  };

  const handlePlusNegative = () => {
    if (parseFloat(value) > 0) {
      setValue(parseFloat(-value));
    } else if (parseFloat(value) < 0) {
      setValue(Math.abs(parseFloat(value)));
    }
  };
  return (
    <div className="calculator-wrapper">
      <CalcScreen
        value={value}
        historyValue={historyValue}
        handleValueChange={handleValueChange}
        fontSize={fontSize}
      />
      <Buttons
        handleClickNumber={handleClickNumber}
        handleEqual={handleEqual}
        handleAdd={handleAdd}
        handleSubtraction={handleSubtraction}
        handleClean={handleClean}
        handleDivide={handleDivide}
        handleMultiplication={handleMultiplication}
        handlePercentage={handlePercentage}
        handlePlusNegative={handlePlusNegative}
      />
    </div>
  );
};

export default Calculator;
