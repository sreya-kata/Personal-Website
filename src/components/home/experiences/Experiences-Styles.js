import styled from "styled-components";
import { boxShadow } from "../../../constants/colors";
import { devices } from "../../../constants/devices";

const ExperiencesSection = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const ExperienceCards = styled.div`
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

  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 48%;
  }
  @media ${devices.laptop} {
    width: 31%;
  }
  @media ${devices.desktop} {
    width: 27%;
  }
`;

const ExperienceImage = styled.img`
  width: 100%;
  display: block;
  transition: box-shadow 0.7s ease;
  border-radius: 20px;

  :hover {
    box-shadow: ${boxShadow};
    cursor: pointer;
  }
`;

export { ExperiencesSection, ExperienceCards, Card, ExperienceImage };
