import styled from "styled-components";
import { white, brownGradient, offBlack } from "./colors";

const Button = styled.button`
  background: ${(props) => (props.secondary ? "transparent" : brownGradient)};
  color: ${(props) => (props.secondary ? offBlack : white)};
  border-radius: 5px;
  border: ${(props) =>
    props.secondary ? `1px solid ${brownGradient}` : "none"};
  padding: 1em;
  box-shadow: 1.5px 1.5px 2.5px ${offBlack};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Lato", sans-serif;
  transition: all 0.2s;
  cursor: pointer;
`;

export { Button };
