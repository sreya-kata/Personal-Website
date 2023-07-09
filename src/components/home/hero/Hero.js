import { Banner, Subtitle, HeroButtons } from "./Hero-Styles";
import resume from "../../../assets/Sreya.Kata.Resume.pdf";
import profile from "../../../assets/profile.png";
import { Button } from "../../../constants/buttons";
import { H1 } from "../../../constants/typography";

const Hero = () => {
  return (
    <Banner>
      <H1>Hi I'm Sreya!</H1>
      <Subtitle>
        Adolescent tumblr coder turned full-stack developer 💻
      </Subtitle>
      <HeroButtons>
        <a href={resume} target="_blank" rel="noreferrer">
          <Button type="button" marginRight={"1.5rem"}>
            Resume
          </Button>
        </a>
        <a
          href="https://github.com/sreya-kata"
          target="_blank"
          rel="noreferrer"
        >
          <Button type="button" secondary>
            Github
          </Button>
        </a>
      </HeroButtons>
      <img src={profile} alt="headshot of me" />
    </Banner>
  );
};

export default Hero;
