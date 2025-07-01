import {
  Banner,
  Title,
  TitleText,
  TitleGif,
  Subtitle,
  HeroButtons,
} from "./Hero-Styles";
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
      <Subtitle>
        {" "}
        Developer with a product mindset | Bridging design, data, and
        engineering<br></br>
        Adolescent Tumblr coder turned full-stack engineer building tools that
        scale and beyond.
      </Subtitle>
      <HeroButtons>
        <a
          href="https://drive.google.com/drive/folders/10b9lyaLHghyjDU4djNH76Yn_4G3wkdVS?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Button type="button" marginRight={"1.5rem"}>
            Resumes
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/sreya-kata/"
          target="_blank"
          rel="noreferrer"
        >
          <Button type="button" secondary>
            LinkedIn
          </Button>
        </a>
      </HeroButtons>
      <img src={profile} alt="headshot of me" />
    </Banner>
  );
};

export default Hero;
