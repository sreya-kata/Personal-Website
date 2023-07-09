import Carousel from "react-carousel-elasticss";
import {
  InterestsSection,
  Intro,
  CarouselContainer,
  Interest,
  Image,
  InterestContent,
  InterestButton,
} from "./Interests-Styles";
import { interestData } from "./Interests-Data";
import { H2, H4, P } from "../../../constants/typography";
import "./Interests.css";

const Interests = () => {
  return (
    <InterestsSection>
      <Intro>
        <H2>And That's a Wrap</H2>
        <P>
          Since you made it to the end, welcome! :)
          <br></br>Here’s a little more about me and interests as well as some
          contact info
        </P>
      </Intro>
      <CarouselContainer>
        <Carousel itemsToShow={3} className="desktop-carousel">
          {interestData.map((int) => (
            <Interest key={int.name}>
              <Image src={int.image}></Image>
              <InterestContent>
                <H4>{int.name}</H4>
                <P>{int.description}</P>
                <a href={int.url} target="_blank" rel="noreferrer">
                  <InterestButton secondary>{int.buttonText}</InterestButton>
                </a>
              </InterestContent>
            </Interest>
          ))}
        </Carousel>
        <Carousel itemsToShow={2} className="tablet-carousel">
          {interestData.map((int) => (
            <Interest key={int.name}>
              <Image src={int.image}></Image>
              <InterestContent>
                <H4>{int.name}</H4>
                <P>{int.description}</P>
                <a href={int.url} target="_blank" rel="noreferrer">
                  <InterestButton secondary>{int.buttonText}</InterestButton>
                </a>
              </InterestContent>
            </Interest>
          ))}
        </Carousel>
        <Carousel itemsToShow={1} className="mobile-carousel">
          {interestData.map((int) => (
            <Interest key={int.name}>
              <Image src={int.image}></Image>
              <InterestContent>
                <H4>{int.name}</H4>
                <P>{int.description}</P>
                <a href={int.url} target="_blank" rel="noreferrer">
                  <InterestButton secondary>{int.buttonText}</InterestButton>
                </a>
              </InterestContent>
            </Interest>
          ))}
        </Carousel>
      </CarouselContainer>
    </InterestsSection>
  );
};

export default Interests;
