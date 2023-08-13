import React, { useState } from "react";
import style from "./form.module.css";
export default function FORM() {
  //putting the all the fields of form inside one object
  const [user, setUser] = useState({ name: "", email: "" });

  const { name, email } = user;

  // commit :controlling form element using state
  // const handleNameChange=(e) =>
  // {
  //     setUser({nama:e.target.value,email});

  // };

  // const handleEmailChange= (e)=>
  // {
  // setUser({nama,email:e.target.value});

  // }

  // ONE SIngle handle change for class user
  //handle change is for retaining value in the input field
  const handleChange = (e) => {
    const fieldName = e.target.name;
    // if(fieldName==="name")
    // {
    //   setUser({name:e.target.value,email});
    // }
    // if(fieldName==='email')
    // {
    // setUser({name,email :e.target.value})

    // through this spread operator each of the input is
    // saved in the user
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <div className={style.formGroup}>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          {" "}
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          {" "}
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
