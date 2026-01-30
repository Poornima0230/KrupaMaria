import { useRef } from "react";
import { Hero } from "../components/ui/Hero";
import { HomeContent } from "../components/ui/HomeContent";
import "../styles/home.css";
import { HomeQuote } from "../components/ui/HomeQuote";

export const Home = () => {
  const aboutRef = useRef(null);
  return (
    <div className="home">
      <Hero nextSectionRef={aboutRef} />
      <section ref={aboutRef} className="homeContent">
        <HomeContent />
      </section>
      <section className="homeQuote">
        <HomeQuote />
      </section>
    </div>
  );
};
