import styled from "styled-components";
import { boxShadow, white } from "../../../constants/colors";
import { P } from "../../../constants/typography";
import { devices } from "../../../constants/devices";

const SkillsSection = styled.div`
  margin-top: 4rem;
  text-align: center;

  @media ${devices.tablet} {
    margin-top: 6rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${devices.mobile} {
    margin-top: 2rem;
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
    margin-top: 3rem;
  }
  @media ${devices.desktop} {
    padding-left: 8.5em;
    padding-right: 8.5em;
  }
`;

const SkillList = styled.ul`
  background: ${white};
  list-style: none;
  padding-inline-start: 0;
  text-align: center;
  padding-top: 2em;
  padding-bottom: 1.7em;
  box-shadow: ${boxShadow};

  @media ${devices.mobile} {
    width: 100%;
  }

  @media ${devices.tablet} {
    width: 47%;
  }

  @media ${devices.laptop} {
    padding-top: 2.4em;
    width: 30%;
  }
`;

const PCard = styled(P)`
  line-height: 0.8em;
`;

export { SkillsSection, Cards, SkillList, PCard };
