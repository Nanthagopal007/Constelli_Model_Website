import "../../Styles/HBanner.css";
import Img1 from "../../assets/banner/banner.jpg";
import Img2 from "../../assets/banner/flightcabin.jpg";
import Img3 from "../../assets/banner/flightonhand.jpg";

const Banner = () => {
  return (
    <div className="containe-fluid banner">
      <div className="row">
        {/* Text Section */}
        <div className="col-md-6 col-12">
          <h1 className="heading">
            Welcome to Constelli — Shaping the Future of Defence with Innovation
            and Technology.
          </h1>
          <p className="subcontent">
            "We provide advanced solutions including Radar Systems, Telemetry
            Transmitters, Telemetry Receivers, and EW Emitter Simulators —
            engineered for mission-critical performance and precision."
          </p>
          <p className="learn-more-box">Learn More 👉</p>
        </div>

        {/* Carousel Section */}
        <div className="col-md-6 col-12 px-md-5 px-3">
          <div
            id="bannerCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#bannerCarousel"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#bannerCarousel"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#bannerCarousel"
                data-bs-slide-to="2"
              ></button>
            </div>

            {/* Slides */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Img1}
                  className="d-block w-100 bannerimg"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Img2}
                  className="d-block w-100 bannerimg"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Img3}
                  className="d-block w-100 bannerimg"
                  alt="Slide 3"
                />
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#bannerCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#bannerCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
