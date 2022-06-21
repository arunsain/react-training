import React from "react";
import { useForm } from "react-hook-form";

import CommonPageBar from "../CommonPageBar";

const Form = () => {
  const host = "http://localhost:5000";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, password } = data;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <CommonPageBar margineTopValue={5}>
      <h1 className="mt-5">Register Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        {/* register your input into the hook by invoking the "register" function */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This name is required</span>}
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && <span>This email is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This password is required</span>}
        </div>

        <input type="submit" />
      </form>
    </CommonPageBar>
  );
};

export default Form;
