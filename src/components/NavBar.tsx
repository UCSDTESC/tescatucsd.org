import { NavLink, useLocation } from "react-router-dom";
import TescLogoWhite from "/AllPages/TESC-logo-white.png";

import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";


const dropdownContainerClass = `
  absolute left-1/2 top-full -translate-x-1/2 mt-[28px]
  text-center
  rounded-none
  bg-navy md:bg-radial md:from-[#114675] md:from-40% md:to-navy
  backdrop-blur-md
  border border-white/10
  shadow-2xl
  overflow-hidden

  opacity-0 -translate-y-3 scale-[0.98]
  pointer-events-none
  transition-all duration-300 ease-out

  group-hover:opacity-100
  group-hover:translate-y-0
  group-hover:scale-100
  group-hover:pointer-events-auto
  z-50
`;

const dropdownItemClass =
  "block px-4 py-3 text-offWhite font-medium hover:bg-white/10";

const hoverBridgeClass = "absolute left-0 top-full h-[28px] w-full z-50 pointer-events-auto";

const dividerLine = "mx-auto mt-3 h-[2px] w-[85%] bg-white/30";

// handle dropdown display

const NavBar = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      console.log("clic");
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full md:bg-radial md:from-[#114675] md:from-40% md:to-navy bg-navy flex justify-between px-[18px] py-1">
      <NavLink to="/" className="">
        <img className="h-[80px] aspect-auto" src={TescLogoWhite} alt="" />
      </NavLink>
      <button
        className="text-white md:hidden text-[clamp(16px,3vw,40px)]"
        ref={buttonRef}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <MenuOutlined />
      </button>
      <div className="hidden md:flex items-center  text-[clamp(16px,2vw,26px)]">
        <div className="relative group h-min mx-[32px]">
          {/* Top-level item (keep it looking identical) */}
          <NavLink to="https://tesc.typeform.com/to/hlC07HII">
            <span className="text-offWhite font-medium">Join Us</span>
          </NavLink>

          <div className={hoverBridgeClass} />

          {/* Dropdown */}
          <div className={`${dropdownContainerClass} w-[170px]`}>

            <NavLink
              to="#"
              className={dropdownItemClass}
            >
              Committee
              
            </NavLink>

            <div className={dividerLine} />

            <NavLink
              to="#"
              className={dropdownItemClass}
            >
              Council
            </NavLink>
          </div>
        </div>

        <NavLink className="h-min mx-[32px]" to="/about-us">
          <span className="text-offWhite  font-medium">About Us </span>
        </NavLink>

        <NavLink className="h-min mx-[32px]" to="/events">
          <span className="text-offWhite  font-medium">Events</span>
        </NavLink>
        
    
        <div className="relative group h-min mx-[32px]">
          {/* Top-level item */}
          <NavLink to="/council-members">
            <span className="text-offWhite font-medium">Council Members</span>
          </NavLink>

          {/* Invisible hover bridge (prevents flicker) */}
          <div className={hoverBridgeClass} />

          {/* Dropdown */}
          <div className={`${dropdownContainerClass} w-[240px]`}>

            <NavLink
              to="#"
              className={dropdownItemClass}
            >
              Members
            </NavLink>

            <div className={dividerLine} />

            <NavLink
              to="#"
              className={dropdownItemClass}
            >
              Accomplishments
            </NavLink>
          </div>
        </div>

        <NavLink className="h-min mx-[32px]" to="/funding">
          <span className="text-offWhite  font-medium">Funding</span>
        </NavLink>
      </div>

      <div
        className={`absolute md:hidden w-max flex flex-col top-20 z-100 bg-navy right-0 items-end text-center overflow-hidden animate-[navbar-animate_1s_forwards]
      ${menuOpen ? "block" : "hidden"}`}
        ref={dropdownRef}
      >
        <NavLink
          className="h-max py-3 mx-[20px]"
          to="https://tesc.typeform.com/to/hlC07HII"
        >
          <span className="text-offWhite py-2  font-medium">Join Us</span>
        </NavLink>
        <NavLink className="h-max py-3 mx-[20px]" to="/about-us">
          <span className="text-offWhite py-2 font-medium">About Us </span>
        </NavLink>
        <NavLink className="h-max py-3 mx-[20px]" to="/events">
          <span className="text-offWhite py-2 font-medium">Events</span>
        </NavLink>
        <NavLink className="h-max py-3 mx-[20px]" to="/council-members">
          <span className="text-offWhite py-2 font-medium">
            Council Members
          </span>
        </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
