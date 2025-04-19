// Dynamic List Rendering with Key Prop
// Problem:
// You are rendering a list of items, but the key prop is not being properly used, which could lead to unnecessary re-renders and performance issues.

// import React, { useState } from 'react';

// const ItemList = () => {
// const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

// return (
// <ul>
// {items.map(item => (
// <li>{item}</li> // Issue: Missing unique 'key' prop
// ))}
// </ul>
// );
// };

// export default ItemList;

// Modify the code to add the key prop to each <li> element to ensure proper reconciliation by React.
// Make sure that each key is unique for every list item.

import React, { useState } from "react";

const ItemList = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {index} {"- "}
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
