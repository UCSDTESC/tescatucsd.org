import { NavLink } from "react-router-dom";
import TescLogoWhite from "/AllPages/TESC-logo-white.png";
import eventsPageImage from "/AllPages/events-page-image.png";
import useImagePreloader from "../Hooks/useImagePreload";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
// import "./navbar.css";
// const NavBar = () => {
//   const pages = (
//     <ul className="navbar-nav ms-auto mb-0">
//       <li className="nav__items nav-item text-center px-4">
//         <NavLink className="nav-link" to="/about-us">
//           <span className="nav-text">About Us </span>
//         </NavLink>
//       </li>
//       <li className="nav__items nav-item text-center px-4">
//         <NavLink className="nav-link" to="/events">
//           <span className="nav-text">Events</span>
//         </NavLink>
//       </li>
//       <li className="nav__items nav-item text-center px-4">
//         <NavLink className="nav-link" to="/council-members">
//           <span className="nav-text">Council Members</span>
//         </NavLink>
//       </li>
//     </ul>
//   );
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-custom">
//         <div className="container-fluid d-flex align-items-center">
//           <NavLink to="/">
//             <img className="nav__logo" src={TescLogoWhite} alt="" />
//           </NavLink>

//           <div className="collapse navbar-collapse" id="navbarText">
//             {pages}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full md:bg-radial md:from-[#114675] md:from-40% md:to-navy bg-navy flex justify-between px-[18px] py-1">
      <NavLink to="/" className="">
        <img className="h-[80px] aspect-auto" src={TescLogoWhite} alt="" />
      </NavLink>
      <button
        className="text-white md:hidden text-[clamp(16px,3vw,40px)]"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <MenuOutlined />
      </button>
      <div className="hidden md:flex items-center  text-[clamp(16px,2vw,26px)]">
        <NavLink
          className="h-min mx-[32px]"
          to="https://tesc.typeform.com/to/hlC07HII"
        >
          <span className="text-offWhite  font-medium">Join Us</span>
        </NavLink>
        <NavLink className="h-min mx-[32px]" to="/about-us">
          <span className="text-offWhite  font-medium">About Us </span>
        </NavLink>

        <NavLink className="h-min mx-[32px]" to="/events">
          <span className="text-offWhite  font-medium">Events</span>
        </NavLink>

        <NavLink className="h-min mx-[32px]" to="/council-members">
          <span className="text-offWhite  font-medium">Council Members</span>
        </NavLink>
      </div>

      <div
        className={`fixed md:hidden w-max flex flex-col top-20 z-100 bg-navy right-0 items-end text-center overflow-hidden animate-[navbar-animate_1s_forwards]
      ${menuOpen ? "block" : "hidden"}`}
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
