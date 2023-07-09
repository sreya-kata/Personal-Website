import styled from "styled-components";
import { white, orange } from "./colors";
import { fonts } from "./typography";
import { devices } from "./devices";

const Button = styled.button`
  position: relative;
  background: ${(props) => (props.secondary ? white : orange)};
  color: ${(props) => (props.secondary ? orange : white)};
  border: ${(props) =>
    props.secondary ? `2px solid ${orange}` : `2px solid transparent`};
  border-radius: 50px;
  padding: 0.7em 2.5em;
  font-size: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: ${fonts.nav};
  cursor: pointer;
  transition: background 0.6s ease;
  margin-right: ${(props) => props.marginRight};
  margin-bottom: 1rem;

  :hover {
    background: ${(props) => (props.secondary ? orange : white)};
    color: ${(props) => (props.secondary ? white : orange)};
    border: 2px solid ${orange};
  }
`;

export { Button };
