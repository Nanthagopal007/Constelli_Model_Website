
const MapIframe = () => {
  return (
    <div className="container mb-3">
      <div
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.173964182094!2d77.69923027481532!3d12.887952017152486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13f78dfe5e3f%3A0xd4c3c61a7c880a9e!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1686159822342!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapIframe;
