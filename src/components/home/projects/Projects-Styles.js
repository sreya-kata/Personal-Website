import styled from "styled-components";
import { brown, blue, white } from "../../../constants/colors";
import {
  fontWeights,
  textStyles,
  H4,
  P,
  fontSizes,
} from "../../../constants/typography";
import { devices } from "../../../constants/devices";

const ProjectsSection = styled.div`
  margin-top: 4rem;
`;

const ProjectsIntro = styled.div`
  text-align: center;
  background: ${blue};
  padding-bottom: 15rem;
  padding-top: 0.5rem;
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
  margin-top: -13rem;

  @media ${devices.mobile} {
    padding-left: 2.5em;
    padding-right: 2.5em;
  }
  @media ${devices.tablet} {
    padding-left: 4em;
    padding-right: 4em;
  }
  @media ${devices.laptop} {
    padding-left: 5em;
    padding-right: 5em;
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
  border-radius: 20px;
  box-shadow: 0px 3px 25px 0px rgba(0, 0, 0, 0.15);
  background: ${white};
  text-align: center;

  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.tablet} {
    margin-bottom: 5rem;
    width: 48%;
  }
  @media ${devices.laptop} {
    width: 45%;
  }
  @media ${devices.desktop} {
    width: 27%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.2rem;
`;

const ProjectImage = styled.img`
  width: 90%;
`;

const ProjectContent = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 0.8rem;
`;

const Languages = styled(H4)`
  font-size: ${fontSizes.p};
  margin-top: -0.2rem;
`;

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
`;

export {
  ProjectsSection,
  ProjectsIntro,
  ProjectCards,
  Card,
  ImageContainer,
  ProjectImage,
  ProjectContent,
  Languages,
  ButtonContainer,
};
