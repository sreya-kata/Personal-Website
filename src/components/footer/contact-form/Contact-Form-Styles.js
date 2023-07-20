import styled from "styled-components";
import { fontWeights, fonts } from "../../../constants/typography";
import { blue, white } from "../../../constants/colors";

const ContactFormContainer = styled.div`
  text-align: right;
`;

const EmailMeta = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const MetaInput = styled.input`
  padding: 0.5rem 1.5rem;
  font-family: ${fonts.body};
  outline: none;
  &:first-child {
    margin-right: 1rem;
  }

  &:focus {
    outline: none;
  }
`;

const EmailMessage = styled.textarea`
  padding: 1rem 1.5rem 2rem;
  font-family: ${fonts.body};
  width: -webkit-fill-available;
`;

const EmailButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SendButton = styled.button`
  cursor: pointer;
  font-family: ${fonts.nav};
  padding: 0.7em 4em 0.7em 2.5em;
  font-size: 1rem;
  font-weight: ${fontWeights.bold};
  background: linear-gradient(to left, white 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: left bottom;
  transition: all 0.5s ease-out;
  border: 2px solid ${white};
  border-radius: 50px;
  color: ${white};
  position: relative;
  margin-right: 2rem;

  :hover {
    background-position: right bottom;
    color: ${blue};
  }
`;

const SendText = styled.div`
  transition: all 0.6s ease-out;
`;

export {
  ContactFormContainer,
  EmailMeta,
  MetaInput,
  EmailMessage,
  EmailButtons,
  SendButton,
  SendText,
};
