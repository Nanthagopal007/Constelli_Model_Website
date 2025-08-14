import "../../Styles/OurValues.css";

import Openness from "../../assets/ourvalues/Open.jpeg";
import Innovation from "../../assets/ourvalues/Innovation.jpeg";
import Commitment from "../../assets/ourvalues/Commitment.jpeg";
import Respect from "../../assets/ourvalues/Respect.jpeg";
import Honesty from "../../assets/ourvalues/Honesty.jpeg";
import Teamwork from "../../assets/ourvalues/Teamwork.jpeg";
import Improvement from "../../assets/ourvalues/Improvement.jpeg";

const values = [
  { title: "Openness", image: Openness },
  { title: "Innovation", image: Innovation },
  { title: "Commitment", image: Commitment },
  { title: "Respect", image: Respect },
  { title: "Honesty", image: Honesty },
  { title: "Teamwork", image: Teamwork },
  { title: "Continuous Improvement", image: Improvement },
];

const OurValues = () => {
  return (
    <div className="our-values-section container py-5">
      <h2 className="text-center mb-5">
        Our <span className="highlight">Values</span>
      </h2>
      <div className="row justify-content-center">
        {values.map((value, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
          >
            <div className="value-card">
              <img src={value.image} alt={value.title} className="value-img" />
              <h5 className="mt-3">{value.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
