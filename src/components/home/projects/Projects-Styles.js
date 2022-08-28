import styled from "styled-components";
import { tan, offBlack, brown, boxShadow } from "../../../constants/colors";
import {
  fontSizes,
  fontWeights,
  textStyles,
  StyledLink,
  P,
} from "../../../constants/typography";
import { devices } from "../../../constants/devices";

const ProjectsSection = styled.div`
  margin-top: 7rem;
`;

const ProjectsIntro = styled.div`
  text-align: center;
  @media ${devices.mobile} {
    padding-left: 2.7em;
    padding-right: 2.7em;
  }
  @media ${devices.laptop} {
    padding-left: 6em;
    padding-right: 6em;
  }
`;

const ProjectCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3rem;

  @media ${devices.mobile} {
    padding-left: 2.5em;
    padding-right: 2.5em;
  }
  @media ${devices.tablet} {
    padding-left: 4em;
    padding-right: 4em;
  }
  @media ${devices.laptop} {
    padding-left: 6em;
    padding-right: 6em;
  }
  @media ${devices.desktop} {
    padding-left: 8.5em;
    padding-right: 8.5em;
  }
  ::after {
    content: "";
    flex: 0 0 30%;
  }
`;

const Card = styled.div`
  margin-bottom: 3rem;

  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 48%;
  }
  @media ${devices.laptop} {
    width: 30%;
  }
  @media ${devices.desktop} {
    width: 27%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  display: block;
  transition: box-shadow 0.7s ease;

  :hover {
    box-shadow: ${boxShadow};
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const ProjectLink = styled(StyledLink)`
  color: ${offBlack};
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.bold};
  text-transform: ${textStyles.uppercase};
  border-bottom: 2px solid ${tan};
  padding-bottom: 0.2rem;
  margin-right: 0.8rem;
`;

const Languages = styled.div`
  margin-top: 0.8rem;
`;

const Language = styled(P)`
  color: ${brown};
  font-weight: ${fontWeights.semiBold};
  text-transform: ${textStyles.uppercase};
  display: inline;
  letter-spacing: 0.01em;
`;

const Separator = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-weight: ${fontWeights.normal};
`;

export {
  ProjectsSection,
  ProjectsIntro,
  ProjectCards,
  Card,
  ProjectImage,
  ProjectHeader,
  ProjectLink,
  Languages,
  Language,
  Separator,
};
