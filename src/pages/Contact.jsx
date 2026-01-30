import "../styles/contact.css";
import map from "../assets/map.png";
export const Contact = () => {
  return (
    <div className="contact">
      <div className="heading">
        <h2>Contact</h2>
        <hr className="underline" />
      </div>
      <div className="contact-info">
        <div className="left-side">
          <p>email: ma22d005@smail.iitm.ac.in</p>
          <p>address: Office No - 618,</p>
          <p>Department of Mathematics,</p>
          <p>Krishna Chivukula Block,</p>
          <p>Indian Institute of Technology Madras,</p>
          <p>Chennai 600036,</p>
          <p>Tamil Nadu,</p>
          <p>India</p>
        </div>
        <img src={map} alt="map" />
      </div>
    </div>
  );
};
