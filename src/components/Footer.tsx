import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  // const pages = (
  //   <ul className="flex">
  //     <li className="text-[26px] font-medium list-none text-center px-4">
  //       <NavLink className="nav-link" to="/about-us">
  //         <span className="nav-text">About Us </span>
  //       </NavLink>
  //     </li>
  //     <li className="text-[26px] font-medium list-none text-center px-4">
  //       <NavLink className="nav-link" to="/events">
  //         <span className="nav-text">Events</span>
  //       </NavLink>
  //     </li>
  //     <li className="text-[26px] font-medium list-none  text-center px-4">
  //       <NavLink className="nav-link" to="/council-members">
  //         <span className="nav-text">Council Members</span>
  //       </NavLink>
  //     </li>
  //   </ul>
  // );
  const pages = (
    <div className="flex items-center">
        <NavLink className="h-min mx-4" to="/about-us">
          <span className="text-[#dbdada] text-[26px] font-medium">
            About Us{" "}
          </span>
        </NavLink>

        <NavLink className="h-min mx-4" to="/events">
          <span className="text-[#dbdada] text-[26px] font-medium">Events</span>
        </NavLink>

        <NavLink className="h-min mx-4" to="/council-members">
          <span className="text-[#dbdada] text-[26px] font-medium">
            Council Members
          </span>
        </NavLink>
      </div>
  );
  const contactIcons = (
    <div className="flex m-0 p-0 h-[39px] items-center gap-[25px]">
      <a
        href="mailto:contact@tesc.ucsd.edu"
        className="text-[#fff] text-[26px] leading-[39px]"
      >
        <MdEmail />
      </a>

      <a
        href="https://instagram.com/ucsdtesc/"
        className=" text-[#fff] text-[26px] leading-[39px]"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/company/ucsdtesc"
        className=" text-[#fff] text-[26px] leading-[39px]"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://x.com/UCSDTESC/"
        className=" text-[#fff] text-[26px] leading-[39px]"
      >
        <FaXTwitter />
      </a>

      <a
        href="https://tescucsd.org/discord"
        className=" text-[#fff] text-[26px] leading-[39px]"
      >
        <FaDiscord />
      </a>
    </div>
  );

  return (
    <>
      <footer className="bg-[#1c2e4a] pl-[2%] min-h-[15vh] flex justify-between w-full items-center">
        <div className="flex flex-row items-start text-left gap-5">
          <p className="text-[#dbdada] text-[26px] leading-[39px] font-medium list-none">
            Contact Us
          </p>
          <div>{contactIcons}</div>
        </div>
        <div>{pages}</div>
      </footer>
    </>
  );
};

export default Footer;
