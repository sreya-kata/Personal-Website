import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { H2 } from "../../../constants/typography";
import { blue, white } from "../../../constants/colors";
import {
  ContactFormContainer,
  EmailMeta,
  MetaInput,
  EmailMessage,
  EmailButtons,
  SendButton,
  SendText,
} from "./Contact-Form-Styles";

const ContactForm = () => {
  const form = useRef();
  const name = useRef();
  const emailAddress = useRef();
  const message = useRef();
  const emailSuccess = () =>
    toast("Email Sent!", {
      type: "success",
    });
  const emailFailure = () =>
    toast("Email Unable to Send", {
      type: "error",
    });
  const fieldsEmpty = () =>
    toast("Fields cannot be empty", {
      type: "error",
    });
  const invalidEmail = () =>
    toast("Need to enter valid email", {
      type: "error",
    });
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      name.current.value === "" ||
      emailAddress.current.value === "" ||
      message.current.value === ""
    ) {
      fieldsEmpty();
    } else if (!emailAddress.current.value.match(validEmail)) {
      invalidEmail();
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            emailSuccess();
            name.current.value = "";
            emailAddress.current.value = "";
            message.current.value = "";
            console.log(result.text);
          },
          (error) => {
            emailFailure();
            console.log(error.text);
          }
        );
    }
  };

  const clearEmail = () => {
    name.current.value = "";
    emailAddress.current.value = "";
    message.current.value = "";
  };

  return (
    <>
      <ContactFormContainer>
        <H2 white>Send a Message!</H2>
        <form ref={form}>
          <EmailMeta>
            <MetaInput
              type="text"
              placeholder="Name"
              name="from_name"
              ref={name}
            />
            <MetaInput
              type="email"
              placeholder="Email"
              name="from_email"
              ref={emailAddress}
            />
          </EmailMeta>
          <div>
            <EmailMessage
              name="message"
              type="text"
              placeholder="Message"
              ref={message}
            />
          </div>
          <EmailButtons>
            <SendButton onClick={sendEmail}>
              <SendText>Send</SendText>
              <FontAwesomeIcon
                icon={faPaperPlane}
                size="2x"
                className="send-icon"
                color={blue}
              />
            </SendButton>
            <FontAwesomeIcon
              icon={faTrashCan}
              size="2x"
              className="trash-icon"
              color={white}
              onClick={clearEmail}
            />
          </EmailButtons>
        </form>
      </ContactFormContainer>
      <ToastContainer autoClose={3000} hideProgressBar pauseOnHover={false} />
    </>
  );
};

export default ContactForm;
