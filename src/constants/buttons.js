import styled from "styled-components";
import { white, tanGradient, offBlack } from "./colors";
import { fonts } from "./typography";

const Button = styled.button`
  position: relative;
  background: ${(props) => (props.secondary ? white : tanGradient)};
  background-clip: padding-box;
  color: ${(props) => (props.secondary ? offBlack : white)};
  border: 3px solid transparent;
  border-radius: 4px;
  padding: 1em 2.3em;
  box-shadow: 0px 10px 30px rgba(57, 56, 61, 0.205);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.95em;
  font-family: ${fonts.nav};
  cursor: pointer;
  transition: background 0.6s ease;
  margin-right: ${(props) => props.marginRight};

  :hover {
    background: ${(props) => (props.secondary ? tanGradient : white)};
    background-clip: padding-box;
    color: ${(props) => (props.secondary ? white : offBlack)};
  }

  ::after {
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    background: ${tanGradient};
    content: "";
    z-index: -1;
    border-radius: 4px;
  }
`;

export { Button };
