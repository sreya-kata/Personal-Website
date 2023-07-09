import {
  ProjectsSection,
  ProjectsIntro,
  ProjectCards,
  Card,
  ImageContainer,
  ProjectContent,
  ProjectImage,
  Languages,
  ButtonContainer,
} from "./Projects-Styles";
import { projectData } from "./Project-Data";
import { H2, H4, P } from "../../../constants/typography";
import { Button } from "../../../constants/buttons";

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsIntro>
        <H2 white>Projects</H2>
        <P white>
          Here are some projects I developed while in school<br></br> Some even
          have interesting social and cultural connections!
        </P>
      </ProjectsIntro>
      <ProjectCards>
        {projectData.map((project) => {
          return (
            <Card key={project.name}>
              <ImageContainer>
                <ProjectImage src={project.image} />
              </ImageContainer>
              <ProjectContent>
                <H4>{project.name}</H4>
                <Languages>{project.languages}</Languages>
                <P
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></P>
                <ButtonContainer>
                  {(project.live || project.report) && (
                    <a
                      href={project.live || project.report}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button>{project.live ? "Live" : "Report"}</Button>
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noreferrer">
                      <Button secondary>Code</Button>
                    </a>
                  )}
                </ButtonContainer>
              </ProjectContent>
            </Card>
          );
        })}
      </ProjectCards>
    </ProjectsSection>
  );
};

export default Projects;
