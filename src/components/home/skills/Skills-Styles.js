import styled from "styled-components";
import { H3 } from "../../../constants/typography";

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  margin-top: 7em;
`;

const HalfColumn = styled.div`
  width: 50%;
`;

const TextColumn = styled.div`
  padding-left: 4em;
  padding-right: 6em;
`;

const H3WithSpacing = styled(H3)`
  margin-top: 0.05em;
  margin-bottom: 0.05em;
  letter-spacing: 0.55em;
`;

const Bio = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  width: 100%;
`;

const ImageColumn = styled.div`
  padding-left: 4em;
`;

export {
  AboutSection,
  HalfColumn,
  TextColumn,
  H3WithSpacing,
  Bio,
  Img,
  ImageColumn,
};
