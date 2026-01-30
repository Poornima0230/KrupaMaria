import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

export const Sidebar = ({ showMenu, handleToggle }) => {
  return (
    <aside className={showMenu ? "sidebar open" : "sidebar"}>
      {!showMenu && <h1 className="side-logo">Krupa Maria</h1>}
      {!showMenu && <hr className="side-logo-hr" />}
      <nav>
        <ul>
          <li>
            <NavLink to="/" onClick={handleToggle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/vision" onClick={handleToggle}>
              Vision
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" onClick={handleToggle}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/research" onClick={handleToggle}>
              Research
            </NavLink>
          </li>
          <li>
            <NavLink to="/teaching" onClick={handleToggle}>
              Teaching
            </NavLink>
          </li>
          <li>
            <NavLink to="/internship" onClick={handleToggle}>
              InterShips
            </NavLink>
          </li>
          <li>
            <NavLink to="/mentorship" onClick={handleToggle}>
              Mentorship & Outreach
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={handleToggle}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={handleToggle}>
              Gallery
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
