import React from "react";
import CommonPageBar from "../CommonPageBar";

const Form = () => {
  const handleForm = () => {
    alert("asdghasjd");
  };

  return (
    <CommonPageBar margineTopValue={5}>
      <h1 className="mt-5">Register Form</h1>
      <form className="mt-5">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" onClick={handleForm} className="btn btn-primary">
          Submit
        </button>
      </form>
    </CommonPageBar>
  );
};

export default Form;
