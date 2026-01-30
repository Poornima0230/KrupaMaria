import "../../styles/hero.css";
import { FaChevronDown } from "react-icons/fa";

export const Hero = ({ nextSectionRef }) => {
  const handleScrollDown = () => {
    nextSectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-name">Krupa Maria</h1>
          <div className="underline"></div>
          <p className="hero-tagline">
            A freethinking woman celebrating the spirit of humanity!
          </p>
        </div>
        <div className="down-arrow" onClick={handleScrollDown}>
          <FaChevronDown />
        </div>
      </div>
    </>
  );
};
