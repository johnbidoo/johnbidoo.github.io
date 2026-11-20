import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./themeToggle";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">John Bernardo</div>

      <div className="nav-links">
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/goals">GOALS</NavLink>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;