import React from "react";
import CommonPageBar from "../CommonPageBar";

const About = () => {
  return (
    <CommonPageBar margineTopValue={5}>
      <div className="card text-bg-dark mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Dark card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </CommonPageBar>
  );
};

export default About;
