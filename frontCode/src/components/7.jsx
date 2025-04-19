// Using Context API for Global State
// Problem:
// You need to manage global state for a theme (dark or light mode) in your app using React's Context API, but the following code doesn't utilize context properly.

// import React, { useState } from 'react';

// const ThemeToggle = () => {
// const [theme, setTheme] = useState('light');

// return (
// <div>
// <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
// Toggle Theme
// </button>
// </div>
// );
// };

// export default ThemeToggle;

// Refactor the code to use the Context API to manage the theme globally across components.
// Create a ThemeContext and provide it in the app so that the theme can be accessed and updated by other components.

import React, { createContext, useState } from "react";
import Child from "../components/child";
const data = createContext();

const ThemeToggle = () => {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <data.Provider value={theme}>
        <Child theme={theme} />
      </data.Provider>
    </div>
  );
};

export default ThemeToggle;
export { data };
