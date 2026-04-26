import { NavLink, useLocation } from "react-router-dom";
import TescLogoWhite from "/AllPages/TESC-logo-white.png";

import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
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
        <a
          className="h-min mx-[32px]"
          href="https://tesc.typeform.com/to/hlC07HII"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-offWhite  font-medium">Join Us</span>
        </a>
        <NavLink className="h-min mx-[32px]" to="/about-us">
          <span className="text-offWhite  font-medium">About Us </span>
        </NavLink>

        <NavLink className="h-min mx-[32px]" to="/events">
          <span className="text-offWhite  font-medium">Events</span>
        </NavLink>
        <div className="relative group h-min mx-[32px]">
          <span className="cursor-default text-offWhite font-medium select-none">
            Council Members
          </span>
          <div className="absolute left-1/2 top-full h-3 w-full -translate-x-1/2" />
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[240px] rounded-xl bg-navy/95 border border-white/20 shadow-xl backdrop-blur-sm z-50 overflow-hidden">
            <NavLink
              to="/council-members"
              className="block px-4 py-3 text-offWhite hover:bg-white/10 text-base font-medium"
            >
              Members
            </NavLink>
            <div className="h-px bg-white/15" />
            <NavLink
              to="/accomplishments"
              className="block px-4 py-3 text-offWhite hover:bg-white/10 text-base font-medium"
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
        <a
          className="h-max py-3 mx-[20px]"
          href="https://tesc.typeform.com/to/hlC07HII"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-offWhite py-2  font-medium">Join Us</span>
        </a>
        <NavLink className="h-max py-3 mx-[20px]" to="/about-us">
          <span className="text-offWhite py-2 font-medium">About Us </span>
        </NavLink>
        <NavLink className="h-max py-3 mx-[20px]" to="/events">
          <span className="text-offWhite py-2 font-medium">Events</span>
        </NavLink>
        <div className="flex flex-col items-end gap-1 py-2 mx-[20px]">
          <span className="text-offWhite font-medium">Council Members</span>
          <NavLink className="h-max py-1" to="/council-members">
            <span className="text-offWhite/90 text-sm font-medium">Members</span>
          </NavLink>
          <NavLink className="h-max py-1" to="/accomplishments">
            <span className="text-offWhite/90 text-sm font-medium">Accomplishments</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
