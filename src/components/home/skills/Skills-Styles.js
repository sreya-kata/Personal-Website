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
    padding-left: 3em;
    padding-right: 3em;
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
  margin-top: 3rem;

  @media ${devices.mobile} {
    padding-left: 3em;
    padding-right: 3em;
  }
  @media ${devices.laptop} {
    padding-left: 6em;
    padding-right: 6em;
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
    width: 100%;
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
