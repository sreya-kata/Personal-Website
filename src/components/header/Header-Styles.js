import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 1.5em;
`;

const FlexColumn = styled.div`
  display: flex;
  flex: 1 1 0%;
  &:nth-child(1) {
    justify-content: flex-start;
    padding-left: 4em;
  }
  &:nth-child(2) {
    justify-content: flex-end;
    padding-right: 4em;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 2em;
  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  letter-spacing: 0.04em;
  font-size: 0.93em;

  :hover {
    background: linear-gradient(90deg, #996633 0%, #f1a48e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export { Navbar, FlexColumn, NavLinks, NavItem, NavLink };
