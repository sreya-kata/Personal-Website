import styled from "styled-components";
import { Button } from "../../../constants/buttons";
import { boxShadow } from "../../../constants/colors";
import { devices } from "../../../constants/devices";

const InterestsSection = styled.section`
  margin-top: 3em;
  text-align: center;
`;

const Intro = styled.div`
  padding-left: 2.5em;
  padding-right: 2.5em;
`;

const CarouselContainer = styled.div`
  @media ${devices.tablet} {
    padding-left: 4em;
    padding-right: 4em;
  }
  @media ${devices.laptop} {
    padding-left: 5em;
    padding-right: 5em;
  }
`;

const Interest = styled.div`
  margin-top: 2.2rem;
  margin-bottom: 2.2rem;
  border-radius: 20px;
  width: 88%;
  box-shadow: ${boxShadow};
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const InterestContent = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  flex-grow: 1;
  padding-bottom: 5rem;
`;

const InterestButton = styled(Button)`
  position: absolute;
  bottom: 3rem;
`;

export {
  InterestsSection,
  Intro,
  CarouselContainer,
  Interest,
  Image,
  InterestContent,
  InterestButton,
};
