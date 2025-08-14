import "../../Styles/ContactForm.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="contact-container container">
      <div className="row contact-row">
        {/* Left Column - Contact Info */}
        <div className="col-md-5 contact-info">
          <h2 className="ps-5">Get In Touch</h2>

          <div className="info-item">
            <div className="icon-circle">
              <FaPhoneAlt className="icon" />
            </div>
            <span>+91 98491 34642</span>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FaEnvelope className="icon" />
            </div>
            <span>info@constelli.com</span>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <FaMapMarkerAlt className="icon" />
            </div>
            <span>
              <strong>
                Constelli Signals Private Limited Hyderabad Office:
              </strong>
              <br />
              5th Floor, DGS Prime, Near CSR Building, Siddhi Vinayak Nagar,
              Madhapur, Hyderabad, Telangana - 500081, India
            </span>
          </div>

          {/* Social Media Icons (Static JSX) */}
          <div className="social-icons">
            <div className="social-icon instagram">
              <FaInstagram />
            </div>
            <div className="social-icon twitter">
              <FaTwitter />
            </div>
            <div className="social-icon youtube">
              <FaYoutube />
            </div>
            <div className="social-icon linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="col-md-6 contact-form">
          <form>
            <h3>ContactUs</h3>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="Enter your phone" />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
