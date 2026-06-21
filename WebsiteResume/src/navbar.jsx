import { useEffect, useState } from "react";

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
        <a href="#">HOME</a>
        <a href="#">GOALS</a>
        <a href="#">CV</a>
      </div>
    </div>
  );
}

export default Navbar;