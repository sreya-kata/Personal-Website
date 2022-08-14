import styled from "styled-components";
import banner from "../assets/banner.png";

const Banner = styled.section`
  background: url(${banner});
  background-position: 0 30%;
  display: flex;
  margin-top: 4em;
`;

const HalfColumn = styled.div`
  width: 50%;
`;

const TextColumn = styled.div`
  padding-left: 6em;
`;

const H3 = styled.h3`
  font-size: 3.4em;
  font-weight: 400;
  color: #212529;
  font-family: "Lato", sans-serif;
  margin-bottom: 0;
`;

const H1 = styled.h1`
  font-size: 5em;
  text-transform: uppercase;
  color: #212529;
  font-family: "Lato", sans-serif;
  margin-top: 0;
  margin-bottom: 0;
`;

const H4 = styled.h4`
  font-size: 1.5em;
  margin-top: 0.8em;
  text-transform: uppercase;
  color: #212529;
  font-family: "Lato", sans-serif;
`;

export { Banner, HalfColumn, TextColumn, H3, H1, H4 };
