import React, { useState } from "react";
import CommonPageBar from "./CommonPageBar";
const UseStatePractice = () => {
  const [name, setName] = useState("Enter Your Name");
  const [inputVal, setInputVal] = useState("");
  const changeName = () => {
    if (inputVal !== "") {
      setName(inputVal);
    } else {
      setName("Enter Your Name");
    }
  };

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <CommonPageBar margineTopValue={5}>
      <div>{name}</div>
      <br />
      <input onChange={handleInput} name="title" />
      <br />
      <br />
      <button className="btn btn-success" onClick={changeName}>
        Change
      </button>
    </CommonPageBar>
  );
};

export default UseStatePractice;
