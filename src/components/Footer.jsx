import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub,FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        ProfileForge.
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://instagram.com">
          <AiOutlineInstagram />
        </a>
        <a href="https://linkedin.com">
          <CiLinkedin />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
        <a href="https://twitter.com">
          < FaXTwitter />
        </a>
      </div>
       <div className="footer_copyright">
        <small>&copy;copyright : All rights reserved </small>
       </div>
    </footer>
  );
};

export default Footer;
