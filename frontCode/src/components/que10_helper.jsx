// que10_helper.js
import React from "react";
import { useCount } from "./CountContext";

const ChildrenComponent = () => {
  const { count, setCount } = useCount();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ChildrenComponent;
