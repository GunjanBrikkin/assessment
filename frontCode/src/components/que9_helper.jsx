import React, { useState } from "react";
import DataFetcher from "./9";

const Checking = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>
      {show && <DataFetcher />}
    </div>
  );
};

export default Checking;
