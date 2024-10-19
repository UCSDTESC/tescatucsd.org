import "./Header.css";
import CoffeeMug from "../../assets/CoffeeMug.svg";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close navbar after clicking on a link
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
        <p id="decaf">DECAF</p>
      </div>
      <div className="whitespace"></div>
      
      {/* Hamburger Menu (visible only on mobile) */}
      <div className="hamburger" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      
      {/* Navbar (responsive behavior) */}
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <div onClick={() => scrollToSection("about")} className="clickable">
          ABOUT
        </div>
        <div onClick={() => scrollToSection("sponsor")} className="clickable">
          SPONSORS
        </div>
        <div onClick={() => scrollToSection("faq")} className="clickable">
          FAQ
        </div>
        <div onClick={() => scrollToSection("contact")} className="clickable">
          CONTACT
        </div>
      </div>
    </div>
  );
}

export default Header;
