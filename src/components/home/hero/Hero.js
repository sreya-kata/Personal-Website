import {
  Banner,
  Title,
  TitleText,
  TitleGif,
  Subtitle,
  HeroButtons,
} from "./Hero-Styles";
import resume from "../../../assets/Sreya.Kata.Resume.pdf";
import handGif from "../../../assets/hand.gif";
import profile from "../../../assets/profile.png";
import { Button } from "../../../constants/buttons";

const Hero = () => {
  return (
    <Banner>
      <Title>
        <TitleText>Hi I'm Sreya!</TitleText>
        <TitleGif src={handGif} alt="animated emoji hand wave" />
      </Title>
      <Subtitle>Adolescent tumblr coder turned full-stack developer</Subtitle>
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
