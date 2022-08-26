import styled from "styled-components";
import { tan, offBlack, brown } from "../../../constants/colors";
import {
  fontSizes,
  fontWeights,
  textStyles,
  Link,
  P,
} from "../../../constants/typography";

const ProjectsSection = styled.div`
  margin-top: 7rem;
`;

const ProjectsIntro = styled.div`
  text-align: center;
  padding-left: 6em;
  padding-right: 6em;
`;

const ProjectCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 6em;
  padding-right: 6em;
  margin-top: 3rem;
`;

const Card = styled.div`
  width: 30%;
  margin-bottom: 3rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  display: block;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: baseline;
`;

const ProjectLink = styled(Link)`
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
