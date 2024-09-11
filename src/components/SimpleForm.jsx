import React from "react";
import { useState } from "react";

const SimpleForm = () => {
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted :", FormData);
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handelSubmit} />
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={FormData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>email:</label>
        <input
          type="email"
          name="email"
          value={FormData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>password:</label>
        <input
          type="password"
          name="password"
          value={FormData.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SimpleForm;
