import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ProjectsSection,
  ProjectsIntro,
  ProjectCards,
  Card,
  ProjectImage,
  ProjectHeader,
  ProjectLink,
  Languages,
  Language,
  Separator,
} from "./Projects-Styles";
import { projectData } from "./Project-Data";
import { H3 } from "../../../constants/typography";
import { tan } from "../../../constants/colors";

const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsIntro>
        <H3>Projects</H3>
      </ProjectsIntro>
      <ProjectCards>
        {projectData.map((project) => {
          return (
            <Card>
              <ProjectImage src={project.image} />
              <ProjectHeader>
                <ProjectLink>{project.name}</ProjectLink>
                <FontAwesomeIcon icon={project.icon} color={tan} size="lg" />
              </ProjectHeader>
              <Languages>
                {project.languages.map((language, index) => {
                  return (
                    <Language>
                      {language}
                      {index !== project.languages.length - 1 && (
                        <Separator>•</Separator>
                      )}
                    </Language>
                  );
                })}
              </Languages>
            </Card>
          );
        })}
      </ProjectCards>
    </ProjectsSection>
  );
};

export default Projects;
