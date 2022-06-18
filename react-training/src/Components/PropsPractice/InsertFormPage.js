import React, { useEffect, useState } from "react";

const InsertFormPage = (props) => {
  const [serialNo, setSerialNo] = useState(1);
  const [formval, setFormVal] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    state: "",
  });

  const inputTextHandler = (e) => {
    setFormVal({ ...formval, [e.target.name]: e.target.value });
  };

  const submitFormHandle = async (e) => {
    e.preventDefault();
    props.concatFormData(formval);
    setFormVal({
      email: "",
      name: "",
      address: "",
      city: "",
      state: "",
    });
  };

  return (
    <div>
      <form className="row g-3" onSubmit={submitFormHandle}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={inputTextHandler}
            name="name"
            required
            value={formval.name}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            onChange={inputTextHandler}
            name="email"
            value={formval.email}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            required
            onChange={inputTextHandler}
            name="address"
            value={formval.address}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select
            onChange={inputTextHandler}
            id="inputState"
            className="form-select"
            name="state"
            required
          >
            <option value="">Choose your state</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            required
            onChange={inputTextHandler}
            name="city"
            value={formval.city}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default InsertFormPage;
