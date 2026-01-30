import { EducationAccordion } from "../components/ui/Accordion";
import { EduInfo } from "../components/ui/EduInfo";
import "../styles/education.css";

export const Education = () => {
  return (
    <div>
      <section className="edu-content">
        <EduInfo />
      </section>
      <section className="edu-accordion">
        <EducationAccordion />
      </section>
    </div>
  );
};
