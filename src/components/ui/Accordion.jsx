import { useState } from "react";
import "../../styles/accordion.css";
// import { educationData } from "../../data/educationDetails";
import educationData from "../../data/educationdata.json";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

export const EducationAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="education-accordion">
      {educationData.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => handleToggle(index)}
          >
            <span className="degree">{item.degree}</span>
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
  );
};
