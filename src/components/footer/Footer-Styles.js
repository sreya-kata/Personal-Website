import styled from "styled-components";
import { blue, white } from "../../constants/colors";
import { devices } from "../../constants/devices";
import { H3 } from "../../constants/typography";

const FooterSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  margin-top: 1.6rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${blue};

  @media ${devices.laptop} {
    margin-top: 5rem;
  }
`;

const FullWidth = styled.div`
  width: 100%;
`;

const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3.5rem;
`;

const Copyright = styled(H3)`
  margin-top: 3.5rem;
  margin-bottom: -0.7rem;
  color: ${white};
`;

const SocialMedia = styled.a`
  margin-right: 4rem;

  &:last-child {
    margin-right: 0;
  }
`;

export { FooterSection, FullWidth, SocialMedias, Copyright, SocialMedia };
