import "../../Styles/Product.css";
import product1 from "../../assets/products/radar.jpg";
import product2 from "../../assets/products/telemetry.jpg";
import product3 from "../../assets/products/cs.jpg";
import product4 from "../../assets/products/ew.jpg";
import product5 from "../../assets/products/labview.jpg";
import product6 from "../../assets/products/ip.jpg";

const products = [
  {
    id: 1,
    name: "Radar",
    image: product1,
    details:
      "Radar helps detect enemy aircraft, ships, and missiles. It plays a critical role in surveillance, navigation, and targeting systems.",
  },
  {
    id: 2,
    name: "Telemetry",
    image: product2,
    details:
      "Constelli’s Digital Telemetry Transmitter is a flight-worthy system used in defense and aerospace applications.",
  },
  {
    id: 3,
    name: "Customized Solutions",
    image: product3,
    details:
      "Have a unique requirement? We offer tailored development of signal processing systems.",
  },
  {
    id: 4,
    name: "EW Emitter",
    image: product4,
    details:
      "CEWS-G helps simulate complex emitter profiles with compatibility for STK and more.",
  },
  {
    id: 5,
    name: "LabVIEW Toolkit",
    image: product5,
    details:
      "Constelli RTK is a complete LabVIEW solution for radar test, design, and education.",
  },
  {
    id: 6,
    name: "Communication IP",
    image: product6,
    details:
      "FPGA signal processing IPs for radios, EW COMINT, datalinks, and spectrum monitoring.",
  },
];

const Product = () => {
  return (
    <div className="container product-section">
      <h2 className="text-center h2p mb-5">Our Products and Services</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" data-aos="zoom-in">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
