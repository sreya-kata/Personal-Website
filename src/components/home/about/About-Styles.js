import styled from "styled-components";
import { devices } from "../../../constants/devices";
import { blue } from "../../../constants/colors";

const AboutSection = styled.section`
  background: ${blue};
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.5em;

  @media ${devices.laptop} {
    margin-top: 7em;
  }
`;

const HalfColumn = styled.div`
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.tabletMax} {
    margin-top: 2rem;
    order: ${(props) => (props.secondMobile ? "2" : "")};
  }
  @media ${devices.laptop} {
    width: 50%;
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
`;

export { AboutSection, HalfColumn, TextColumn, Bio, Img, ImageColumn };
