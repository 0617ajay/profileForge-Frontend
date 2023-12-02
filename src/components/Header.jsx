import React from 'react';
import CV from '../assests/cv.pdf';
import ME from '../assests/me.png';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HeaderSocials = ({socialHandle}) => {
  return (
    <div className="header_socials">
      <a href={`${socialHandle.linkedin}`} target="blank"><BsLinkedin /></a>
      {/* <a href={`${socialHandle.linkedin}`} target="blank">
        <BsLinkedin />
      </a> */}
      {/* <a href="https://github.com" target="blank">
        <BsGithub />
      </a> */}
    </div>
  );
};

const CTA = ({personalDetails}) => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary maker">
        Let's Talk
      </a>
    </div>
  );
};

const Header = ({ personalDetails ,socialHandle}) => {
  return (
    <header>
      <br></br>
      <Link to="/portfolio_signup" className='btn btn-primary'>Make it yours</Link>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        {personalDetails ? (
          <>
            <h1>{personalDetails.firstName} {personalDetails.lastName}</h1>
            {/* <h5 className="text-light">FullStack Developer</h5> */}
            <h5 className="text-light">{personalDetails.bio}</h5>
            <CTA personalDetails={personalDetails}/>
            <HeaderSocials socialHandle={socialHandle}/>
            <div className="me">
              <img src={ME} alt={personalDetails.profileImageUrl}  />
            </div>
            <a href="#contact" className="scroll_down">
              Scroll Down
            </a>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </header>
  );
};

export default Header;
