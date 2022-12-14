import styled from "styled-components";
import { boxShadow } from "../../../constants/colors";
import { P } from "../../../constants/typography";
import { devices } from "../../../constants/devices";

const SkillsSection = styled.div`
  margin-top: 7rem;
`;

const SkillsIntro = styled.div`
  text-align: center;
  @media ${devices.mobile} {
    padding-left: 2.7em;
    padding-right: 2.7em;
  }
  @media ${devices.laptop} {
    padding-left: 6em;
    padding-right: 6em;
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
    margin-top: 3rem;
    padding-left: 6em;
    padding-right: 6em;
  }
  @media ${devices.desktop} {
    padding-left: 8.5em;
    padding-right: 8.5em;
  }
`;

const SkillList = styled.ul`
  background: #f8f8f8;
  list-style: none;
  padding-inline-start: 0;
  text-align: center;
  padding-top: 2.5em;
  padding-bottom: 1.7em;
  transition: box-shadow 0.7s ease;

  :hover {
    box-shadow: ${boxShadow};
  }

  @media ${devices.mobile} {
    width: 100%;
  }

  @media ${devices.tablet} {
    width: 47%;
  }

  @media ${devices.laptop} {
    padding-top: 3.3em;
    width: 22%;
  }
`;

const PCard = styled(P)`
  line-height: 1em;
`;

export { SkillsSection, SkillsIntro, Cards, SkillList, PCard };
