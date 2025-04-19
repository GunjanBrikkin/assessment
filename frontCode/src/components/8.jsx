// Form Handling with Controlled Components
// Problem:
// The following code is missing proper state management for the form inputs. The form input is uncontrolled, meaning React is not handling its state.

// import React from 'react';

// const RegistrationForm = () => {
// const handleSubmit = (e) => {
// e.preventDefault();
// console.log('Form submitted');
// };

// return (
// <form onSubmit={handleSubmit}>
// <input type="text" name="username" placeholder="Username" />
// <input type="email" name="email" placeholder="Email" />
// <button type="submit">Submit</button>
// </form>
// );
// };

// export default RegistrationForm;

// Modify the code to use controlled components for both the username and email fields.
// Use the useState hook to manage the state of each input field.

import React, { useState } from "react";

const RegistrationForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
    console.log("data ois ==>", data);
    console.log("data.username", data.username);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          value={data.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
