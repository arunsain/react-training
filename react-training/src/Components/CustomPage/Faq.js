import React from "react";
import CommonPageBar from "../CommonPageBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import img4 from "../../Images/img4.jpg";
import "./FaqStyle.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Faq = () => {
  const footerDes = "Copyright@2022 React Development Training";
  return (
    <>
      <Navbar />
      <div className="container-fluid abc">
        <Carousel autoPlay showThumbs={false} showArrows>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
        </Carousel>
      </div>
      <Footer footerDes={footerDes} />
    </>
  );
};

export default Faq;
