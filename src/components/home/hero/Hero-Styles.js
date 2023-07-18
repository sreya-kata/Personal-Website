import styled from "styled-components";
import { H1, H3 } from "../../../constants/typography";
import { devices } from "../../../constants/devices";

const Banner = styled.section`
  margin-top: 3em;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled(H1)`
  margin-bottom: 0;
`;

const TitleGif = styled.img`
  width: 3rem;
  margin-left: 0.75rem;

  @media ${devices.laptop} {
    width: 4rem;
    margin-left: 1rem;
  }
`;

const Subtitle = styled(H3)`
  padding-left: 2.5em;
  padding-right: 2.5em;
`;

const HeroButtons = styled.div`
  margin-top: 2.2rem;
  margin-bottom: 2.2rem;
`;

export { Banner, Subtitle, Title, TitleText, TitleGif, HeroButtons };
