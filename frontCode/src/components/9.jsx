// Handling Component Lifecycle with useEffect
// Problem:
// You need to fetch data when the component is mounted and clean up the effect when the component is unmounted. The following code does not handle the cleanup correctly.

// import React, { useState, useEffect } from 'react';

// const DataFetcher = () => {
// const [data, setData] = useState(null);

// useEffect(() => {
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => setData(data));

// // Missing cleanup: we need to cancel any pending fetch requests
// }, []);

// return <div>{data ? <p>{data[0].title}</p> : <p>Loading...</p>}</div>;
// };

// export default DataFetcher;

// Modify the code to clean up the fetch request when the component is unmounted (e.g., using AbortController).
// Ensure that the component handles the cleanup properly without memory leaks.

import React, { useState, useEffect } from "react";
const DataFetcher = () => {
  const [data, setData] = useState(null);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((response) => response.json())
      .then((jsonResult) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(jsonResult);
          }, 2000);
        });
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", error);
        }
      });
  }, []);

  return <div>{data ? <p>{data[0].title}</p> : <p>Loading...</p>}</div>;
};

export default DataFetcher;
