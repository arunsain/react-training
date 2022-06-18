import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const CommonPageBar = (props) => {
  const footerDes = "Copyright@2022 React Development Training";
  return (
    <div>
      <Navbar />
      <div className={`container mt-${props.margineTopValue}`}>
        {props.children}
        <Footer footerDes={footerDes} />
      </div>
    </div>
  );
};

export default CommonPageBar;
