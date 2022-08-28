import styled from "styled-components";
import { devices } from "../../constants/devices";

const ProjectDetails = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 5rem;

  @media ${devices.laptop} {
    margin-top: 5rem;
  }
`;

const HalfColumn = styled.div`
  @media ${devices.mobile} {
    width: 100%;
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
    padding-left: 6em;
    padding-right: 4em;
  }
  @media ${devices.desktop} {
    padding-left: 8.5em;
    padding-right: 4.8em;
  }
`;

const Description = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  width: 100%;
`;

const ImageColumn = styled.div`
  @media ${devices.mobile} {
    padding-left: 2.5em;
    padding-right: 2.5em;
    margin-top: 2rem;
  }
  @media ${devices.tablet} {
    padding-left: 4em;
    padding-right: 4em;
  }
  @media ${devices.laptop} {
    padding-right: 6em;
    padding-left: 0;
    margin-top: 0;
  }
  @media ${devices.desktop} {
    padding-right: 8.5em;
  }
`;

export {
  ProjectDetails,
  HalfColumn,
  TextColumn,
  Description,
  Img,
  ImageColumn,
};
