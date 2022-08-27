import styled from "styled-components";
import { devices } from "../../../constants/devices";

const AboutSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 5em;

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
    padding-left: 3em;
    padding-right: 3em;
  }
  @media ${devices.laptop} {
    padding-left: 4em;
    padding-right: 6em;
  }
`;

const Bio = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  width: 100%;
`;

const ImageColumn = styled.div`
  @media ${devices.mobile} {
    padding-left: 3em;
    padding-right: 3em;
  }
  @media ${devices.laptop} {
    padding-left: 4em;
    padding-right: 0;
  }
`;

export { AboutSection, HalfColumn, TextColumn, Bio, Img, ImageColumn };
