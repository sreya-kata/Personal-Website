import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import {
  AboutSection,
  HalfColumn,
  TextColumn,
  H3WithSpacing,
  Bio,
  ImageColumn,
  Img,
} from "./Skills-Styles";
import vector from "../../../assets/vector.png";
import { Button } from "../../../constants/buttons";
import { P, Link } from "../../../constants/typography";

const cards = {
  Coding: {
    icon: faCode,
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

// {skill.values.map((skill) => {
//   return (
//   <li key={index}>{skill}</li>;
// })}

const Skills = () => {
  return (
    <div>
      <div>
        <h3>Skills</h3>
        <p>
          Being a combined major, I have experience with both programming and
          theory as well as leadership and communication skills.
        </p>
      </div>
      <div>
        {Object.keys(cards).map(function (keyName, keyIndex) {
          return (
            <ul key={keyIndex}>
              <h4>{keyName}</h4>
              <FontAwesomeIcon icon={cards[keyName].icon} />
              {cards[keyName].values.map((value) => {
                return <li>{value}</li>;
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
