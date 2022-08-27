import {
  AboutSection,
  HalfColumn,
  TextColumn,
  Bio,
  ImageColumn,
  Img,
} from "./About-Styles";
import vector from "../../../assets/vector.png";
import { Button } from "../../../constants/buttons";
import { H3WithSpacing, P, StyledLink } from "../../../constants/typography";

const About = () => {
  return (
    <AboutSection id="about">
      <HalfColumn>
        <ImageColumn>
          <Img src={vector} alt="cartoon vector of girl"></Img>
        </ImageColumn>
      </HalfColumn>
      <HalfColumn>
        <TextColumn>
          <H3WithSpacing>Here's</H3WithSpacing>
          <H3WithSpacing>a little</H3WithSpacing>
          <H3WithSpacing> about me</H3WithSpacing>
          <Bio>
            <P>
              I’m Sreya, a student from New Jersey pursuing a Bachelor of
              Science in Computer Science and Business (Marketing Analytics) in
              Boston, MA. I’m interested in web and software development and
              smooth user interfaces. Thanks to my coursework at&nbsp;
              <StyledLink
                href="https://www.northeastern.edu/"
                target="_blank"
                rel="noreferrer"
              >
                Northeastern University
              </StyledLink>
              , I’m always exploring new skills from both the development and
              design worlds and figuring out how to integrate them.
            </P>
            <P>
              When I’m not behind my computer, you’ll likely find me going to
              some kind of concert or trying the food at a new restaurant in the
              city.
            </P>
          </Bio>
          <a
            href="https://www.linkedin.com/in/sreya-kata/"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="button">LinkedIn</Button>
          </a>
        </TextColumn>
      </HalfColumn>
    </AboutSection>
  );
};

export default About;
