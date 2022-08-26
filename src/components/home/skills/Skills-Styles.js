import styled from "styled-components";
import { boxShadow } from "../../../constants/colors";
import { P } from "../../../constants/typography";

const SkillsSection = styled.div`
  margin-top: 7rem;
`;

const SkillsIntro = styled.div`
  text-align: center;
  padding-left: 6em;
  padding-right: 6em;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 6em;
  padding-right: 6em;
  margin-top: 3rem;
`;

const SkillList = styled.ul`
  background: #f8f8f8;
  width: 22%;
  list-style: none;
  padding-inline-start: 0;
  text-align: center;
  padding-top: 3.3em;
  padding-bottom: 1.7em;
  transition: box-shadow 0.7s ease;

  :hover {
    box-shadow: ${boxShadow};
  }
`;

const PCard = styled(P)`
  line-height: 1em;
`;

export { SkillsSection, SkillsIntro, Cards, SkillList, PCard };
