import { Link } from "react-router-dom";
import "../../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white py-4 mt-5">
      <div className="container-fluid px-4">
        <div className="row gy-4">
          {/* Company Logo */}
          <div className="col-md-3">
            <h3 className="footer-logo">
              CONSTELLI
              <sup>
                <i className="bi bi-r-circle" />
              </sup>
            </h3>
            <p className="mt-2 small">
              Driving innovation in defense and communication technology.
            </p>
          </div>

          {/* Reach Us Section */}
          <div className="col-md-3">
            <p className="footer-title">REACH US</p>
            <ul className="footer-list">
              <li>
                <i className="bi bi-geo-alt me-2 text-warning" />
                Constelli Signals Private Limited
              </li>
              <li className="ms-4">
                <b>Hyderabad Office</b><br />
                <small>
                  5th Floor, DGS Prime, Near CSR Building,<br />
                  Siddhi Vinayak Nagar, Madhapur, Hyderabad, Telangana - 500081
                </small>
              </li>
              <li className="ms-4 mt-2">
                <b>Bengaluru Office</b><br />
                <small>
                  3rd Floor Challaghatta, Scalex Loop,<br />
                  Embassy Golf Links Road, Embassy Golf Business Park,<br />
                  Domlur, Bengaluru, Karnataka - 560071
                </small>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-3">
            <p className="footer-title">CONTACT US</p>
            <ul className="footer-list">
              <li>
                <i className="bi bi-telephone me-2 text-warning" />
                <small>+91 40 4853-3841</small>
              </li>
              <li>
                <i className="bi bi-printer me-2 text-warning" />
                <small>+91 40 4853-3841</small>
              </li>
              <li>
                <i className="bi bi-envelope-at me-2 text-warning" />
                <small>info@constelli.com</small>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3">
            <p className="footer-title">GET UPDATES</p>
            <p className="small">
              Keep up on our evolving product features and technology.
              Enter your e-mail and subscribe to our newsletter.
            </p>
            <div className="d-flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="footer-input form-control"
              />
              <button className="btn btn-warning text-white">Go!</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
