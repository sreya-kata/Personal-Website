import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { SkillsSection, Cards, SkillList, PCard } from "./Skills-Styles";
import { H2, H4 } from "../../../constants/typography";
import { white } from "../../../constants/colors";
import "./Skills.css";

const cards = {
  Frontend: {
    icon: faLaptopCode,
    values: [
      "JavaScript/TypeScript",
      "React",
      "GraphQL",
      "Figma",
      "Gatsby",
      "Shopify (Liquid)",
    ],
  },
  Backend: {
    icon: faGear,
    values: ["Java", "Python", "SQL", "MongoDB", "Neo4j", "Android Studio"],
  },
  Tools: {
    icon: faHammer,
    values: ["Git", "Jenkins", "Jira", "AWS", "Docker", "Postman"],
  },
};

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <H2>Moving Onto Tech</H2>
      <Cards>
        {Object.keys(cards).map(function (keyName, keyIndex) {
          return (
            <SkillList key={keyIndex}>
              <FontAwesomeIcon
                icon={cards[keyName].icon}
                size="4x"
                className="font-awesome-icon"
                color={white}
              />
              <H4>{keyName}</H4>
              {cards[keyName].values.map((value) => {
                return (
                  <li key={value}>
                    <PCard>{value}</PCard>
                  </li>
                );
              })}
            </SkillList>
          );
        })}
      </Cards>
    </SkillsSection>
  );
};

export default Skills;
