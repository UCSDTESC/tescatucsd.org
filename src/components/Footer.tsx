import { NavLink } from "react-router-dom";
// import "./footer.css";
import {
  DiscordOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  TwitterOutlined
} from "@ant-design/icons";
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
      <NavLink
        className="h-min mx-[32px]"
        to="https://tesc.typeform.com/to/hlC07HII"
      >
        <span className="text-offWhite text-[26px] font-medium">Join Us</span>
      </NavLink>
      <NavLink className="h-min mx-[32px]" to="/about-us">
        <span className="text-offWhite text-[26px] font-medium">About Us </span>
      </NavLink>

      <NavLink className="h-min mx-[32px]" to="/events">
        <span className="text-offWhite text-[26px] font-medium">Events</span>
      </NavLink>

      <NavLink className="h-min mx-[32px]" to="/council-members">
        <span className="text-offWhite text-[26px] font-medium">
          Council Members
        </span>
      </NavLink>
    </div>
  );
  const contactIcons = (
    <div className="flex m-0 p-0 h-[39px] items-center gap-[25px]">
      <a
        href="mailto:contact@tesc.ucsd.edu"
        className="text-white text-[26px] leading-[39px]"
      >
        <MailOutlined />
      </a>

      <a
        href="https://instagram.com/ucsdtesc/"
        className=" text-white text-[26px] leading-[39px]"
      >
        <InstagramOutlined />
      </a>

      <a
        href="https://www.linkedin.com/company/ucsdtesc"
        className=" text-white text-[26px] leading-[39px]"
      >
        <LinkedinOutlined />
      </a>

      <a
        href="https://x.com/UCSDTESC/"
        className=" text-white text-[26px] leading-[39px]"
      >
        <TwitterOutlined />
      </a>

      <a
        href="https://tescucsd.org/discord"
        className=" text-white text-[26px] leading-[39px]"
      >
        <DiscordOutlined />
      </a>
    </div>
  );

  return (
    <>
      <footer className="bg-navy pl-[2%] min-h-[15vh] flex justify-between w-full items-center">
        <div className="flex flex-row items-start text-left gap-5">
          <p className="text-offWhite text-[26px] leading-[39px] font-medium list-none">
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
