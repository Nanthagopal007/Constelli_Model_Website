import Footer from "../components/common/Footer";
import NavigationBar from "../components/common/NavigationBar";
import Banner from "../components/homepage/Banner";
import FMCW from "../components/homepage/FMCW.JSX";
import Industries from "../components/homepage/Industries";
import Product from "../components/homepage/Product";
import RAR from "../components/homepage/RAR";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Banner />
      <Industries />
      <Product />
      <FMCW />
      <RAR />
      <Footer />
    </>
  );
};

export default Home;
