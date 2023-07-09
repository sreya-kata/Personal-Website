import { useRef } from "react";
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
  const carouselRef = useRef(null);

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(interestData.length);
    }
  };

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
        <Carousel
          disableArrowsOnEnd={false}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          breakPoints={[
            { width: 320, itemsToShow: 1 },
            { width: 768, itemsToShow: 2 },
            { width: 1024, itemsToShow: 3 },
          ]}
        >
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
