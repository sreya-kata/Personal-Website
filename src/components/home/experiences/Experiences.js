import { ExperiencesSection, ExperienceCards } from "./Experiences-Styles";
import { experienceData } from "./Experiences-Data";
import { H2 } from "../../../constants/typography";
import ExperienceCard from "./Experience-Card";

const Experiences = () => {
  return (
    <ExperiencesSection id="experience">
      <H2>Experiences</H2>
      <ExperienceCards>
        {experienceData.map((experience) => {
          return <ExperienceCard experience={experience} />;
        })}
      </ExperienceCards>
    </ExperiencesSection>
  );
};

export default Experiences;
