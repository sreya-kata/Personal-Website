import styled from "styled-components";
import { size, devices } from "./devices";
import { offBlack, orange, white } from "./colors";

const fonts = {
  header: `'Outfit', sans-serif`,
  subheader: `'Outfit', sans-serif`,
  body: `'Lato', sans-serif`,
  button: `'Lato', sans-serif`,
  nav: `'Lato', sans-serif`,
};

const minSize = {
  h1: 35,
  h2: 26,
  h3: 18,
  h4: 16,
  p: 12,
};

const fontSizes = {
  h1: `calc(${minSize.h1}px + (58 - ${minSize.h1}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  h2: `calc(${minSize.h2}px + (40 - ${minSize.h2}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  h3: `calc(${minSize.h3}px + (26 - ${minSize.h3}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  h4: `calc(${minSize.h4}px + (32 - ${minSize.h4}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  p: `calc(${minSize.p}px + (17 - ${minSize.p}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
};

const textStyles = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  underline: "underline",
  capitalize: "capitalize",
};

const fontWeights = {
  normal: `400`,
  medium: `500`,
  semiBold: `600`,
  bold: `700`,
  heavy: `900`,
};

const H1 = styled.h1`
  font-size: ${fontSizes.h1};
  font-family: ${fonts.header};
  font-weight: ${fontWeights.bold};
  color: ${offBlack};
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const H2 = styled.h2`
  font-size: ${fontSizes.h2};
  font-family: ${fonts.subheader};
  font-weight: ${fontWeights.bold};
  text-transform: ${textStyles.capitalize};
  color: ${(props) => (props.white ? white : offBlack)};
  margin-bottom: 0.1em;
`;

const H3 = styled.h3`
  font-size: ${fontSizes.h3};
  font-family: ${fonts.body};
  font-weight: ${fontWeights.normal};
  color: ${(props) => (props.white ? white : offBlack)};
`;

const H4 = styled.h4`
  font-size: ${fontSizes.h4};
  font-family: ${fonts.subheader};
  font-weight: ${fontWeights.bold};
  color: ${offBlack};
  margin-top: 0.8em;
  margin-bottom: 0.2em;
`;

const P = styled.p`
  font-size: ${fontSizes.p};
  font-family: ${fonts.body};
  font-weight: ${fontWeights.normal};
  color: ${(props) => (props.white ? white : offBlack)};
  @media ${devices.mobile} {
    line-height: 22px;
  }
  @media ${devices.tablet} {
    line-height: 23px;
  }
  @media ${devices.desktop} {
    line-height: 25px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${white};
  font-family: ${fonts.body};
  cursor: pointer;
  border-bottom: 2px solid ${orange};
  transition: all 0.2s;
`;

export {
  fonts,
  H1,
  H2,
  H3,
  H4,
  P,
  StyledLink,
  fontSizes,
  fontWeights,
  textStyles,
};
