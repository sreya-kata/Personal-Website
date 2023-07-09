import styled from "styled-components";
import { devices } from "../../../constants/devices";
import { blue } from "../../../constants/colors";

const AboutSection = styled.section`
  background: ${blue};
  display: flex;
  flex-wrap: wrap;
  margin-top: 4.5em;
  padding-top: 1.5rem;

  @media ${devices.laptop} {
    margin-top: 7em;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const TextColumn = styled.div`
  @media ${devices.mobile} {
    padding-left: 2.5em;
    padding-right: 2.5em;
  }
  @media ${devices.tablet} {
    padding-left: 4em;
    padding-right: 4em;
  }
  @media ${devices.laptop} {
    width: 50%;
    padding-left: 3em;
    padding-right: 5em;
  }
  @media ${devices.desktop} {
    padding-left: 5em;
    padding-right: 8.5em;
  }
`;

const Bio = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  margin-top: 2.2rem;
  margin-bottom: 3rem;

  @media ${devices.mobileMax} {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

const ImageColumn = styled.div`
  @media ${devices.mobile} {
    padding-left: 2.5em;
    padding-right: 2.5em;
  }
  @media ${devices.tablet} {
    padding-left: 4em;
    padding-right: 4em;
  }
  @media ${devices.laptop} {
    width: 40%;
    padding-left: 5em;
    padding-right: 0;
  }

  @media ${devices.desktop} {
    padding-left: 8.5em;
  }

  @media ${devices.tabletMax} {
    order: ${(props) => (props.secondMobile ? "2" : "")};
    margin: 0 auto;
  }
`;

export { AboutSection, TextColumn, Bio, Img, ImageColumn };
