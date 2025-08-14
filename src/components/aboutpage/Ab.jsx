import React from "react";
import Signal from "../../assets/ab/Signal.jpeg";
import "../../Styles/Ab.css";

const Ab = () => {
  return (
    <div className="about-container container my-5 py-4">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={Signal}
            alt="Signal antenna"
            className="about-image img-fluid rounded shadow"
          />
        </div>

        {/* Text Column */}
        <div className="col-md-6">
          <h3 className="about-title mb-3">About Constelli Signals</h3>
          <p className="about-description">
            We are a passionate team of engineers, domain experts, and seasoned sales professionals
            delivering end-to-end solutions in Signal Processing. Our work spans across
            cutting-edge technologies, primarily focusing on Defence and Aerospace sectors.
          </p>
          <p className="about-description">
            From tactical radios to advanced radar systems, we engineer solutions that serve both research and mission-critical operations. 
            Our goal is to meet the most challenging requirements with innovation and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ab;
