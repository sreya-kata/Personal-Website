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
    padding-left: 3em;
    padding-right: 3em;
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
    padding-left: 3em;
    padding-right: 3em;
  }
  @media ${devices.laptop} {
    padding-left: 6em;
    padding-right: 6em;
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
  align-items: baseline;
`;

const ProjectLink = styled(StyledLink)`
  color: ${offBlack};
  font-size: ${fontSizes.h4};
  font-weight: ${fontWeights.bold};
  text-transform: ${textStyles.uppercase};
  border-bottom: 2px solid ${tan};
  padding-bottom: 0.2rem;
  margin-top: 1rem;
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
