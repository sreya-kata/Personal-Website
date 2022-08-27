import styled from "styled-components";
import { devices } from "../../constants/devices";

const FooterSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  margin-top: 1.6rem;
  margin-bottom: 0.9rem;

  @media ${devices.laptop} {
    margin-top: 2.6rem;
  }
`;

const FullWidth = styled.div`
  width: 100%;
`;

const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavItem = styled.li`
  margin-right: 2em;
  &:last-child {
    margin-right: 0;
  }
`;

const SocialMedia = styled.a`
  margin-right: 4rem;

  &:last-child {
    margin-right: 0;
  }
`;

export { FooterSection, FullWidth, SocialMedias, NavItem, SocialMedia };
