import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../Styles/industries.css";
import Defense from "../../assets/industries/sukoi.jpg";
import Aerospace from "../../assets/industries/rocket.jpg";

const Industries = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
      <div className="container industries py-5">
        <h2 className="text-center h2p mb-5 " data-aos="fade-down">
          Constelli in Defense and Aerospace
        </h2>

        {/* Defense Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <div className="defensei">
              <img src={Defense} className="defenseimg" alt="Defense Su-30" />
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="defense">
              <h4>DEFENSE</h4>
              <p>
                At Constelli, we render top-notch defence solutions in the
                electronic warfare, communications, telemetry and radar
                segments. Constelli has a range of products suiting fields of
                applications like missile testing, ranging & tracking,
                software-defined radios, digital telemetry transmitters and
                receivers and more. Specialized in Radar technology, we offer
                customizable target echo simulators in wide range of bands in
                addition to Air borne, marine, ground surveillance radar
                solutions. Our team, consisting of accomplished engineers,
                devise integral technology solutions with utmost skill and value.
              </p>
            </div>
          </div>
        </div>

        {/* Aerospace Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2" data-aos="fade-left">
            <div className="defensei">
              <img src={Aerospace} className="defenseimg" alt="Aerospace Rocket" />
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="defense">
              <h4>AEROSPACE</h4>
              <p>
                Launch vehicle ranging to satellite tracking to deep space
                communication links, Constelli provides niche technology
                solutions to requirements in the space industry. We provide
                products which range from Radar IPs such as beamforming, phased
                array generators to digital telemetry transceivers. Even better,
                our application engineers can build your custom applications
                with the aid of Constelli’s RTK and off-the-shelf Communication
                systems IP library.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Industries;
