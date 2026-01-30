import "../styles/intership.css";
import internData from "../data/intershipData.json";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";

export const InternShip = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="intern">
      <div className="heading">
        <h2>Internships</h2>
        <hr className="underline" />
      </div>
      <div className="accordion">
        {internData.map((item, index) => (
          <div key={item.id} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              <span className="topic">{item.topic}</span>
              <span className="icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {activeIndex === index && (
              <ul className="accordion-body">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
