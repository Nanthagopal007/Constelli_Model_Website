import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/Abcone.css";
import We from "../../assets/abcone/We2.jpeg";
import Vision from "../../assets/abcone/Vision.jpeg";

const Abcone = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="abcone-section container py-5">
      <div className="row">
        {/* Who We Are */}
        <div className="col-12 col-md-6 mb-4" data-aos="fade-right">
          <div className="abcone-card">
            <h2>
              Who are <span className="highlight">We?</span>
            </h2>
            <img src={We} alt="Team discussion" className="abcone-img" />
            <p>
              Constelli is a technology startup based out of Hyderabad, India.
              We work on leading technologies in Signal Processing solving
              problems in Defence and Aerospace fields. Our solutions range from
              tactical radios to radars, and from research to mission critical
              applications.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="col-12 col-md-6 mb-4" data-aos="fade-left">
          <div className="abcone-card">
            <h2>
              Our <span className="highlight">Vision</span>
            </h2>
            <img src={Vision} alt="Vision" className="abcone-img" />
            <p>
              "Our Vision is to be a global business organization solving
              problems using Signal Processing Systems — making lives better and
              safer."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abcone;
