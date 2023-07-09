import {
  AboutSection,
  TextColumn,
  Bio,
  ImageColumn,
  Img,
} from "./About-Styles";
import states from "../../../assets/states.svg";
import { Button } from "../../../constants/buttons";
import { H2, P, StyledLink } from "../../../constants/typography";

const About = () => {
  return (
    <AboutSection id="about">
      <ImageColumn>
        <Img src={states} alt="cartoon vector of girl"></Img>
      </ImageColumn>
      <TextColumn>
        <H2 white>A Little About Me</H2>
        <Bio>
          <P white>
            I grew up in New Jersey and then went to college in Boston (a
            certified Red Sox and Celtics fan) at{" "}
            <StyledLink
              href="https://www.northeastern.edu/"
              target="_blank"
              rel="noreferrer"
            >
              Northeastern University
            </StyledLink>
            . I originally joined as a business major but switched over once I
            took my first CS class and found my passion for tech that still
            allows a creative outlet - growing up spending my time making Tumblr
            theme templates did not go to waste
          </P>
          <P white>
            Since then, I’ve worked at various companies (see below!) and am
            currently a Software Engineer at Scholastic in NYC, helping develop
            education tools for teachers and students to encourage learning and
            reading!
          </P>
          <P white>
            When I’m not in front of my computer, you’ll find me exploring the
            city, going to concerts, scouring the best restaurant, and
            attempting to learn how to box
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
    </AboutSection>
  );
};

export default About;
