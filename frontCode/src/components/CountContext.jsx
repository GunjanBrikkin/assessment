// CountContext.js
import { createContext, useContext, useState } from "react";

const CountContext = createContext();

export const useCount = () => useContext(CountContext);

export const CountProvider = ({ children }) => {
  console.log("children", children);
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
