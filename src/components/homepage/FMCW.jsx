import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/FMCW.css";

const FMCW = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container py-5 fmcw-section">
      <div className="row g-4 px-3">
        {/* Text Section */}
        <div className="col-12 col-md-6" data-aos="fade-right">
          <div className="fmcw-box col1 h-100">
            <h2 className="mb-3 h2p">
              Constelli RES for <span className="text-primary">FMCW Radar</span>
            </h2>
            <p>
              FMCW Altimeter Test System is for FMCW Radar testing with multiple
              target scenarios, extendable to L, S, C, X, Ka & Ku bands. The
              system includes Coherent Up-Down Converter to extend frequency
              bands. Built with the Constelli Radar Toolkit for LabVIEW, the
              solution can accommodate custom target scenarios and ranges.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="col-12 col-md-6" data-aos="fade-left">
          <div className="fmcw-box col2 h-100 d-flex justify-content-center align-items-center">
            <div className="ratio ratio-16x9 w-100">
              <iframe
                src="https://www.youtube.com/embed/-y-svpMIF9w"
                title="FMCW Radar Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FMCW;
