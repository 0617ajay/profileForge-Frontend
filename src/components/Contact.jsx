import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
const Contact = ({ info,socialHandle }) => {
  const [email, setEmail] =useState('');
  const [phone, setPhone] =useState('');
  const [linkedin, setLinkedin] =useState('');
  const [mailtoLink , setMailtoLink] = useState('');
  

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        {/* <div className="contact_options"> */}
        {(info && socialHandle) ? (
          <>
            {/* <h1>{info.firstName} {info.lastName}</h1> */}

            <article className="contact_option">
              <MdOutlineEmail className="contact_option-icons" />
              <h4>Email</h4>
              <h5>{info.email}</h5>
              <a href={`https://mail.google.com/mail/?to=${info.email}&su=Hello&body=Hi%20there,%0AThis%20is%20the%20body%20of%20the%20email.`} target="blank">Send an Email</a>
              {/* <h5>{info.email}</h5>
              <a href="#" onClick={handleEmailClick}>
                Send an email
              </a> */}
            </article>
            <article className="contact_option">
              <BsWhatsapp className="contact_option-icons" />
              <h4>WhatsApp</h4>
              <h5>+91{info.phoneNo}</h5>

              <a href={`https://wa.me/${info.phoneNo}`} target="blank">Send Message</a>

            </article>
            <article className="contact_option">
              <AiOutlineLinkedin className="contact_option-icons" />
              <h4>LinkedIn</h4>
              <h5>@{info.userUrl}</h5>
              <a href={`${socialHandle.linkedin}`} target="blank">Let's Connect</a>

            </article>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
