import { Banner, HalfColumn, TextColumn } from "./Hero-Styles";
import bannerGirl from "../../../assets/banner-girl.png";
import resume from "../../../assets/Sreya.Kata.Resume.pdf";
import { Button } from "../../../constants/buttons";
import { H1, H2, H4 } from "../../../constants/typography";

const Hero = () => {
  return (
    <Banner>
      <HalfColumn>
        <TextColumn>
          <H2>Hello!</H2>
          <H1>I am Sreya</H1>
          <H4>Full stack developer</H4>
          <div>
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
          </div>
        </TextColumn>
      </HalfColumn>
      <HalfColumn>
        <img src={bannerGirl} alt="cartoon vector of girl"></img>
      </HalfColumn>
    </Banner>
  );
};

export default Hero;
