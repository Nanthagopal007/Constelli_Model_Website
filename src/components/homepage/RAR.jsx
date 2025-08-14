import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../Styles/RAR.css";
import RC from "../../assets/rar/rar.jpg";

const RAR = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
      <div className="container rar-section">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <h3>Rally for Recreation (R.A.R)</h3>
            <p>
              Rally for Recreation (RAR) is a monthly get-together of all the
              Constellites...
            </p>
            <p>
              RAR Saturdays are designed especially to allow the creative juices
              to flow...
            </p>
            <p>
              Our RAR sessions are aimed at bringing out the best in every
              individual...
            </p>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <img src={RC} alt="Rally for Recreation" className="rar-image" />
          </div>
        </div>
      </div>
  );
};

export default RAR;
