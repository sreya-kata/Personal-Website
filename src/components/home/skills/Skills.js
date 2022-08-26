import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import {
  SkillsSection,
  SkillsIntro,
  Cards,
  SkillList,
  PCard,
} from "./Skills-Styles";
import { P, H4, H3 } from "../../../constants/typography";
import { white } from "../../../constants/colors";
import "./Skills.css";

const cards = {
  Coding: {
    icon: faLaptopCode,
    values: ["Java", "HTML/CSS", "JavaScript", "SQL", "Python"],
  },
  Frameworks: {
    icon: faCropSimple,
    values: ["React", "Swing", "Freemarker", "Node.js", "Bootstrap"],
  },
  Concepts: {
    icon: faLightbulb,
    values: ["OOP", "Data Analysis", "Marketing", "UI/UX", "Mobile App"],
  },
  Tools: {
    icon: faHammer,
    values: ["Git", "Shopify", "Figma", "Docker", "MongoDB"],
  },
};

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsIntro>
        <H3>Skills</H3>
        <P>
          Being a combined major, I have experience with both programming and
          theory as well as leadership and communication skills.
        </P>
      </SkillsIntro>
      <Cards>
        {Object.keys(cards).map(function (keyName, keyIndex) {
          return (
            <SkillList key={keyIndex}>
              <FontAwesomeIcon
                icon={cards[keyName].icon}
                size="2xl"
                className="font-awesome-icon"
                color={white}
              />
              <H4>{keyName}</H4>
              {cards[keyName].values.map((value) => {
                return (
                  <li>
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
