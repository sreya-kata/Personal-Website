import {
  ProjectDetails,
  HalfColumn,
  TextColumn,
  Description,
  ImageColumn,
  Img,
} from "./Project-Styles";
import { Button } from "../../constants/buttons";
import { H3WithSpacing, P } from "../../constants/typography";

const Project = ({ name, collage, description, code, live }) => {
  return (
    <ProjectDetails>
      <HalfColumn>
        <TextColumn>
          <H3WithSpacing>{name}</H3WithSpacing>
          <Description>
            <P dangerouslySetInnerHTML={{ __html: description }}></P>
          </Description>
          <a href={code} target="_blank" rel="noreferrer">
            <Button type="button" marginRight={"1.5rem"}>
              Code
            </Button>
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <Button type="button" secondary>
              Live
            </Button>
          </a>
        </TextColumn>
      </HalfColumn>
      <HalfColumn>
        <ImageColumn>
          <Img src={collage} alt="cartoon vector of girl"></Img>
        </ImageColumn>
      </HalfColumn>
    </ProjectDetails>
  );
};

export default Project;
