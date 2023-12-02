import React from "react";
import CV from "../assests/cv.pdf";
import ME from "../assests/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
};

const About = ({ personalDetails }) => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
      {personalDetails ? (
        <>
        <div className="about_me">
          <div className="about_me-image">
            <img
              src={ME}
              alt={personalDetails.profileImage}
            />
          </div>
        </div>
        
          <div className="about_content">
            <ul>
              <li>
                <strong>Name:&nbsp;&nbsp;&nbsp;</strong>{" "}
                {personalDetails.firstName} {personalDetails.lastName}{" "}
              </li>
              <li>
                <strong>Description:&nbsp;&nbsp;</strong> {personalDetails.bio}{" "}
              </li>
              <li>
                <strong>Email:&nbsp;&nbsp;</strong> {personalDetails.email}{" "}
              </li>
              <li>
                <strong>Phone:&nbsp;&nbsp;</strong> +91{personalDetails.phoneNo}{" "}
              </li>
            </ul>
            <CTA />
          </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default About;
