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
    <ProjectsSection id="projects">
      <ProjectsIntro>
        <H3>Projects</H3>
      </ProjectsIntro>
      <ProjectCards>
        {projectData.map((project) => {
          return (
            <Card key={project.name}>
              <a href={project.url}>
                <ProjectImage src={project.image} />
              </a>
              <ProjectHeader>
                <ProjectLink href={project.url}>{project.name}</ProjectLink>
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
