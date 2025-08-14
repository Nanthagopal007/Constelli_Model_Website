import bannerImage from "../../assets/banner/Cbanner.jpeg";
import "../../Styles/CBanner.css";

const CBanner = ({ title }) => {
  return (
      <div
        className="cbanner mt-5"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <h1 className="cbanner-title">{title}</h1>
      </div>
  );
};

export default CBanner;
