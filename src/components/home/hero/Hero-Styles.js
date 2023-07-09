import styled from "styled-components";
import { H3 } from "../../../constants/typography";

const Banner = styled.section`
  margin-top: 3em;
  text-align: center;
`;

const Subtitle = styled(H3)`
  padding-left: 2.5em;
  padding-right: 2.5em;
`;

const HeroButtons = styled.div`
  margin-top: 2.2rem;
  margin-bottom: 2.2rem;
`;

export { Banner, Subtitle, HeroButtons };
