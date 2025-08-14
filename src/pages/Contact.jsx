import NavigationBar from '../components/common/NavigationBar';
import ContactForm from '../components/contactpage/ContactForm';
import Footer from '../components/common/Footer';
import MapIframe from '../components/contactpage/MapIrame';
import CBanner from '../components/common/CBanner';

const Contact = () => {
  return (
    <div>
      <NavigationBar />
      <CBanner title="Contact Us" />
      <ContactForm />
      <MapIframe />
      <Footer />
    </div>
  );
};

export default Contact;
