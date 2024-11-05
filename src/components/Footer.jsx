import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./footer.css";

const Footer = () => {
  const pages = (
    <ul className="d-flex">
      <li className="footer_items text-center px-4">
        <a href="/">
          <span className="footer-text">About Us </span>
        </a>
      </li>
      <li className="footer_items text-center px-4">
        <a href="/">
          <span className="footer-text">Events</span>
        </a>
      </li>
      <li className="footer_items text-center px-4">
        <a href="/">
          <span className="footer-text">Council Members</span>
        </a>
      </li>
    </ul>
  );
  const contactIcons = (
    <ul className="d-flex contact-icons">
      <li className="footer_items">
        <a href="mailto:contact@tesc.ucsd.edu" className="contact-icon">
          <MdEmail />
        </a>
      </li>
      <li className="footer_items">
        <a href="https://instagram.com/ucsdtesc/" className="contact-icon">
          <FaInstagram />
        </a>
      </li>
      <li className="footer_items">
        <a
          href="https://www.linkedin.com/company/ucsdtesc"
          className="contact-icon"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="footer_items">
        <a href="https://x.com/UCSDTESC/" className="contact-icon">
          <FaXTwitter />
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <footer className="footer d-flex justify-content-between fixed-bottom w-100">
        <div className="footer-left">
          <p className="footer-text footer_items">Contact Us</p>
          {contactIcons}
        </div>
        <div>{pages}</div>
      </footer>
    </>
  );
};

export default Footer;
