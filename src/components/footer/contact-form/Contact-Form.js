import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { H2 } from "../../../constants/typography";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <H2 white>Contact Form</H2>
      <form className="cf" ref={form} onSubmit={sendEmail}>
        <div className="half left cf">
          <input type="text" placeholder="Name" name="from_name" />
          <input type="email" placeholder="Email address" name="from_email" />
        </div>
        <div className="half right cf">
          <textarea name="message" type="text" placeholder="Message"></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
    </div>
  );
};

export default ContactForm;
