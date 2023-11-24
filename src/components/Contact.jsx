import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
const Contact = ({ info }) => {
  const [email, setEmail] =useState('');
  const [phone, setPhone] =useState('');
  const [linkedin, setLinkedin] =useState('');
  const [mailtoLink , setMailtoLink] = useState('');
  // useEffect(() => {
  //   setEmail(info.email);
  //   setPhone(info.phone);
  //   setLinkedin(info.linkedin);

  //   // setMailtoLink(`mailto:${info.email}`)
  //   // Now you can perform actions or log the updated apidata
  //     }, [info.email ,]);

 
  // console.log (personalDetails.firstName)
  // const whatsapplink = "http://wa.me/" + {personalDetails.phoneNo};
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        {/* <div className="contact_options"> */}
        {info ? (
          <>
            {/* <h1>{info.firstName} {info.lastName}</h1> */}

            <article className="contact_option">
              <MdOutlineEmail className="contact_option-icons" />
              <h4>Email</h4>

              <h5>{info.email}</h5>
              {/* <a href={mailtoLink} target="blank">
                Send an email
              </a> */}
            </article>
            <article className="contact_option">
              <BsWhatsapp className="contact_option-icons" />
              <h4>WhatsApp</h4>
              <h5>{info.phoneNo}</h5>

              {/* <a href={info.phoneNo} target="_blank">
                Send a message
              </a> */}
            </article>
            <article className="contact_option">
              <AiOutlineLinkedin className="contact_option-icons" />
              <h4>LinkedIn</h4>
              <h5>@{info.userUrl}</h5>
              {/* <a href={info.email} target="_blank">
                Let's connect
              </a> */}
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
