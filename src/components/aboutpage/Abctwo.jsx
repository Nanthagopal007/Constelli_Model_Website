import React from "react";
import "../../Styles/Abctwo.css";
import WorkCulture from "../../assets/abctwo/WorkCulture.jpeg";
import Life from "../../assets/abctwo/Life.jpeg";

const Abctwo = () => {
  return (
    <div className="container abctwo-section">
      <h2 className="section-title">Our Culture & Life at Constelli</h2>
      <div className="culture-row">
        <div className="culture-card">
          <img src={WorkCulture} alt="Our Culture" className="culture-img" />
          <h3>Our Culture</h3>
          <p>
            We believe in our core values and give extreme importance to people
            and respect their thoughts, freedom, and growth. The work culture
            enables every individual to come up with new ideas & innovate, take
            ownership, communicate openly, share knowledge and add value to the
            entire organization.
          </p>
        </div>
        <div className="culture-card">
          <img src={Life} alt="Life at Constelli" className="culture-img" />
          <h3>Life at Constelli</h3>
          <p>
            We have an open and dynamic culture at Constelli enabling a strong
            collaboration among the team. We at Constelli recognize the
            importance of work-life balance and have policies empowering
            employees to strike a happy balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abctwo;
