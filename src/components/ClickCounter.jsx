import React from "react";
import { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handelClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Click Counter</h1>
      <p>You have clicked the button {count} times.</p>
      <button onClick={handelClick}>Click Me</button>
    </div>
  );
};

export default ClickCounter;
