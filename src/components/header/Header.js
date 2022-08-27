import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Navbar,
  FlexColumn,
  NavLinks,
  NavItem,
  NavLink,
  DesktopNavLinks,
  MobileNavLinks,
  MobileNavLink,
  SmallNavLinkContainer,
  SmallMenuContainer,
  SmallLinksContainer,
  CrossContainer,
  MobileNavItem,
} from "./Header-Styles";
import { Hamburger, Cross } from "../../constants/icons";

const Header = () => {
  const [smallLinks, setSmallLinks] = useState(false);
  const [crossClose, setCrossClose] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (crossClose) {
      const interval = setInterval(() => {
        setCrossClose(false);
        setSmallLinks(false);
      });
      return () => clearInterval(interval);
    }
  }, [crossClose]);

  const navLinks = {
    About: "#about",
    Skills: "#skills",
    Projects: "#projects",
    Contact: "#contact",
  };
  return (
    <Navbar>
      <FlexColumn>
        <a href="/#">
          <img src={logo} alt="initial in brown circle" />
        </a>
      </FlexColumn>
      <DesktopNavLinks>
        {path === "/" ? (
          <FlexColumn>
            <NavLinks>
              {Object.keys(navLinks).map((key, index) => {
                return (
                  <NavItem key={index}>
                    <NavLink href={`/${navLinks[key]}`}>{key}</NavLink>
                  </NavItem>
                );
              })}
            </NavLinks>
          </FlexColumn>
        ) : (
          <FlexColumn>
            <NavLinks>
              <NavItem>
                <NavLink href={`/`}>Back</NavLink>
              </NavItem>
            </NavLinks>
          </FlexColumn>
        )}
      </DesktopNavLinks>
      <SmallNavLinkContainer onClick={() => setSmallLinks(true)}>
        <FlexColumn>
          <Hamburger />
        </FlexColumn>
      </SmallNavLinkContainer>
      {smallLinks && (
        <SmallMenuContainer out={crossClose}>
          <CrossContainer onClick={() => setCrossClose(true)}>
            <Cross />
          </CrossContainer>
          <SmallLinksContainer>
            <MobileNavLinks>
              {Object.keys(navLinks).map((key, index) => {
                return (
                  <MobileNavItem key={index}>
                    <MobileNavLink href={`/${navLinks[key]}`}>
                      {key}
                    </MobileNavLink>
                  </MobileNavItem>
                );
              })}
            </MobileNavLinks>
          </SmallLinksContainer>
        </SmallMenuContainer>
      )}
    </Navbar>
  );
};

export default Header;
