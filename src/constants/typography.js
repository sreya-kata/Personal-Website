import styled from "styled-components";
import { size, devices } from "./devices";
import { offBlack, gray, tan } from "./colors";

const fonts = {
  body: `'Lato', sans-serif`,
  header: `'Lato', sans-serif`,
  subheader: `'Roboto', sans-serif`,
  button: `'Lato', sans-serif`,
  nav: `'Lato', sans-serif`,
};

const minSize = {
  h1: 50,
  h2: 35,
  h3: 25,
  h4: 16,
  p: 11.9,
};

const fontSizes = {
  h1: `calc(${minSize.h1}px + (88 - ${minSize.h1}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  h2: `calc(${minSize.h2}px + (57 - ${minSize.h2}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  h3: `calc(${minSize.h3}px + (44 - ${minSize.h3}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  h4: `calc(${minSize.h4}px + (25 - ${minSize.h4}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
  p: `calc(${minSize.p}px + (15.8 - ${minSize.p}) * ((100vw - ${size.mobile}px) / (${size.desktopMax} - ${size.mobile})))`,
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
  text-transform: ${textStyles.uppercase};
  color: ${offBlack};
  margin-top: 0;
  margin-bottom: 0;
`;

const H2 = styled.h2`
  font-size: ${fontSizes.h2};
  font-family: ${fonts.header};
  font-weight: ${fontWeights.normal};
  text-transform: ${textStyles.capitalize};
  color: ${offBlack};
  margin-bottom: 0.1em;
`;

const H3 = styled.h3`
  font-size: ${fontSizes.h3};
  font-family: ${fonts.header};
  font-weight: ${fontWeights.bold};
  text-transform: ${textStyles.uppercase};
  color: ${offBlack};
`;

const H3WithSpacing = styled(H3)`
  margin-top: 0.05em;
  margin-bottom: 0.05em;
  letter-spacing: 0.55em;
`;

const H4 = styled.h4`
  font-size: ${fontSizes.h4};
  font-family: ${fonts.header};
  font-weight: ${fontWeights.bold};
  text-transform: ${textStyles.uppercase};
  color: ${offBlack};
  margin-top: 0.8em;
`;

const P = styled.p`
  font-size: ${fontSizes.p};
  font-family: ${fonts.body};
  font-weight: ${fontWeights.normal};
  color: ${gray};
  @media ${devices.mobile} {
    line-height: 22px;
  }
  @media ${devices.tablet} {
    line-height: 22px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${gray};
  font-family: ${fonts.body};
  cursor: pointer;
  border-bottom: 1.4px solid ${tan};
  transition: all 0.2s;

  :hover {
    color: ${tan};
  }
`;

export {
  fonts,
  H1,
  H2,
  H3,
  H3WithSpacing,
  H4,
  P,
  StyledLink,
  fontSizes,
  fontWeights,
  textStyles,
};
