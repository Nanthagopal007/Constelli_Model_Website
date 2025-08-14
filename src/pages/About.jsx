
import NavigationBar from "../components/common/NavigationBar";
import Abcone from "../components/aboutpage/Abcone";
import Footer from "../components/common/Footer";
import Founder from "../components/aboutpage/Founder";
import OurValues from "../components/aboutpage/OurValues";
import Abctwo from "../components/aboutpage/Abctwo";
import CBanner from "../components/common/CBanner";
import Ab from "../components/aboutpage/Ab";

const About = () => {
  return (
    <div>
      <NavigationBar />
      <CBanner title="AboutUs"/>
      <Ab/>
      <Abcone />
      <Founder />
      <OurValues />
      <Abctwo />
      <Footer />
    </div>
  );
};

export default About;
