import { IoMdSearch } from "react-icons/io";
import "../styles/search.css";
import { useEffect, useState } from "react";

export const Search = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`search-wrapper ${scrolled ? "scrolled" : ""}`}>
      <IoMdSearch className="search" />
    </div>
  );
};
