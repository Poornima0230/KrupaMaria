import "../styles/gallery.css";
import autum from "../assets/autum.png";
import diwal from "../assets/diwali.png";
import girl from "../assets/girl.jpg";
import holi from "../assets/Holi.png";
import hacker from "../assets/hacker.png";
import peacock from "../assets/peacock.jpg";
import tech from "../assets/tech.png";
import water from "../assets/water.png";

export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="heading">
        <h3>Gallery</h3>
        <hr className="underline" />
      </div>
      <div className="images">
        <img src={autum} alt="someImg" />
        <img src={diwal} alt="someImg" />
        <img src={girl} alt="someImg" />
        <img src={hacker} alt="someImg" />
        <img src={holi} alt="someImg" />
        <img src={peacock} alt="someImg" />
        <img src={tech} alt="someImg" />
        <img src={water} alt="someImg" />
        <img src={autum} alt="someImg" />
        <img src={girl} alt="someImg" />
        <img src={hacker} alt="someImg" />
      </div>
    </div>
  );
};
