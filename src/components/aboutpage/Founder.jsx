import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/Founder.css";
import Satya from "../../assets/founders/Satya.jpg"; // replace with actual image path
import Avinash from "../../assets/founders/Avinash.jpg"; // replace with actual image path

const Founder = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container founder-section py-5">
      <h3 className="text-center mb-4">
        Our <span className="highlight">Founders</span>
      </h3>
      <div className="row align-items-center">
        {/* First Founder */}
        <div className="col-12 col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <img
            src={Satya}
            alt="Satya Gopal Panigrahi"
            className="founder-img"
          />
          <div className="founder-card">
            <h4 className="mb-3 heading4">Satya Gopal Panigrahi, CEO</h4>
            <p>
              Satya is an engineering graduate from BITS, Pilani and worked with
              National Instruments, India for 10 Years. With extensive
              experience and expertise in Sales as NI’s Strategic Sales Manager
              (India), Satya co-founded Constelli with a dream of building
              global business organization in the Defence & Aerospace sector.
            </p>
          </div>
        </div>

        {/* Second Founder */}
        <div className="col-12 col-md-6 mb-4 mb-md-0" data-aos="fade-left">
          <img src={Avinash} alt="Another Founder" className="founder-img" />
          <div className="founder-card">
            <h4 className="mb-3 heading4">Avinash Chenreddy, CTO</h4>
            <p>
              Avinash started his career with a small but high-tech venture,
              after his graduation from BVRIT, Hyderabad. He is an RF Systems
              and Signal Processing professional with end to end experience in
              architecting and developing complex systems such as Radar Threat &
              Target Simulators, Telemetry Receiver, and many Communication
              Systems. Avinash has extensive experience in National Instruments’
              RF & FPGA hardware and LabVIEW FPGA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
