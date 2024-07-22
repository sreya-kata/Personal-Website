import styled from "styled-components";
import { blue, white } from "../../constants/colors";
import { devices } from "../../constants/devices";
import { H3 } from "../../constants/typography";

const FooterSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem 2.5em 1.5rem;
  background-color: ${blue};

  @media ${devices.laptop} {
    margin-top: 5rem;
    padding: 3rem 5em 2rem;
  }

  @media ${devices.desktop} {
    padding-left: 6em;
    padding-right: 6em;
  }
`;

const FullWidth = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media ${devices.laptop} {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

const FooterInfo = styled.div`
  text-align: center;

  @media ${devices.tabletMax} {
    order: 1;
  }

  @media ${devices.laptop} {
    text-align: left;
  }
`;

const Logo = styled.img`
  display: none;

  @media ${devices.laptop} {
    display: block;
  }
`;

const SocialMedias = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 3rem;
  justify-content: center;

  @media ${devices.tablet} {
    flex-wrap: nowrap;
  }

  @media ${devices.laptop} {
    justify-content: flex-start;
    margin-top: 2rem;
  }
`;

const Copyright = styled(H3)`
  margin-top: 2.5rem;
  margin-bottom: -0.7rem;
  color: ${white};

  @media ${devices.laptop} {
    margin-top: 3.5rem;
  }
`;

const SocialMedia = styled.a`
  margin-right: 1.4rem;
  text-decoration: none;

  @media ${devices.tablet} {
    margin-right: 4rem;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export {
  FooterSection,
  FullWidth,
  FooterInfo,
  Logo,
  SocialMedias,
  Copyright,
  SocialMedia,
};
