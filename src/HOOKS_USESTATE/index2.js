import React, { useState } from "react";

export default function HOOKS_USESTATE2() {
  const [count, setCount] = useState(0);
  const [buttonText, setButtonText] = useState("+");
  const [buttonText2, setButton2Text] = useState("-");

  const handleIncrement = () => {
    setCount((count) => count + 1);
    if (count > 5) {
      setButtonText("enough");
    }
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
    if (count < -3) {
      setButtonText("enough");
    }
  };

  return (
    <div>
      <h1>Count:{count}</h1>

      <div className="buttonlayout">
        <button className="b1" onClick={handleIncrement} disabled={count > 5}>
          {buttonText}
        </button>
        <button className="b2" onClick={handleDecrement} disabled={count < -5}>
          {buttonText2}
        </button>
      </div>
    </div>
  );
}
