// Handling Multiple Components and Passing Props
// Problem:
// You have multiple components that need to access and modify a shared state. The following code doesn't manage the state effectively and relies on passing props down multiple levels.

// import React, { useState } from "react";

// const App = () => {
// const [count, setCount] = useState(0);

// return (
// <div>
// <h1>Counter: {count}</h1>
// <ChildComponent count={count} setCount={setCount} />
// </div>
// );
// };

// const ChildComponent = ({ count, setCount }) => {
// return (
// <div>
// <button onClick={() => setCount(count + 1)}>Increment</button>
// </div>
// );
// };

// export default App;

// Refactor the code to lift state management into a higher-level component and pass it down to children as needed.
// Ensure that multiple components can update the count without unnecessary re-renders or prop drilling.
// App.js
import React from "react";
import { CountProvider, useCount } from "./CountContext";
import ChildrenComponent from "./que10_helper";

const CounterDisplay = () => {
  const { count } = useCount();
  return <h1>Counter: {count}</h1>;
};

const App = () => {
  return (
    <CountProvider>
      <CounterDisplay />
      <ChildrenComponent />
    </CountProvider>
  );
};

export default App;
