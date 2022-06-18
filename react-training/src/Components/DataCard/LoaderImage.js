import React from "react";

const LoaderImage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{ width: "200px", height: "200px" }}
        src={process.env.PUBLIC_URL + "/Fidget-spinner.gif"}
      />
      <h1>Loading data.......</h1>
    </div>
  );
};

export default LoaderImage;
