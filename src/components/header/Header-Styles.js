import styled from "styled-components";
import { black, brown, white } from "../../constants/colors";
import { devices } from "../../constants/devices";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 1.9em;
  padding-left: 2.5em;
  padding-right: 2.5em;

  @media ${devices.laptop} {
    padding-top: 1.5em;
    padding-left: 4em;
    padding-right: 4em;
  }

  @media ${devices.desktop} {
    padding-left: 6em;
    padding-right: 6em;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex: 1 1 0%;
  &:nth-child(1) {
    justify-content: flex-start;
  }
  &:nth-child(2) {
    justify-content: flex-end;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 2em;
  margin-bottom: ${(props) => (props.marginBottom ? "0.7rem" : "")};
  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.mobile ? white : black)};
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  letter-spacing: 0.04em;
  font-size: 0.93em;
  cursor: pointer;

  :hover {
    background: linear-gradient(90deg, #996633 0%, #f1a48e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const DesktopNavLinks = styled.div`
  @media ${devices.mobile} {
    display: none;
  }
  @media ${devices.laptop} {
    display: block;
  }
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  margin-top: 0.5rem;
  padding-inline-start: 1rem;
`;

const SmallNavLinkContainer = styled.div`
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.mobile} {
    position: relative;
    display: inline-flex;
    float: right;
    margin: 0.1rem 0.1rem 0rem 0rem;
    z-index: 1;
  }
  @media ${devices.laptop} {
    display: none;
  }
`;

const SmallMenuContainer = styled.div`
  position: absolute;
  z-index: 2;
  transition: all 0.25s;
  background: ${brown};
  top: 1.2rem;
  right: 1.2rem;
  border-radius: 6%;
  display: flex;
  flex-direction: column;
  @media ${devices.mobile} {
    padding: 0.5rem 0.5rem 0.1rem 0.5rem;
  }
  @media ${devices.tablet} {
    padding: 0rem 0.5rem 0 0.5rem;
  }
  @media ${devices.laptop} {
    display: none;
  }
`;

const SmallLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0 0.3rem 0;
  > * {
    margin: 0.9rem;
  }
`;

const CrossContainer = styled.div`
  position: relative;
  margin: 0.4rem auto auto 85%;
  &:hover {
    cursor: pointer;
  }
`;

const FlexEndColumn = styled(FlexColumn)`
  justify-content: flex-end;
  @media ${devices.laptop} {
    display: none;
  }
`;

export {
  Navbar,
  FlexColumn,
  FlexEndColumn,
  NavLinks,
  NavItem,
  NavLink,
  DesktopNavLinks,
  MobileNavLinks,
  SmallNavLinkContainer,
  SmallMenuContainer,
  SmallLinksContainer,
  CrossContainer,
};
