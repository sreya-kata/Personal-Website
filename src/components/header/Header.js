import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
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
      {path === "/" ? (
        <>
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
                      <NavItem marginBottom key={index}>
                        <NavLink mobile href={`/${navLinks[key]}`}>
                          {key}
                        </NavLink>
                      </NavItem>
                    );
                  })}
                </MobileNavLinks>
              </SmallLinksContainer>
            </SmallMenuContainer>
          )}
        </>
      ) : (
        <FlexEndColumn>
          <NavLinks>
            <NavItem>
              <NavLink href={`/`}>Back</NavLink>
            </NavItem>
          </NavLinks>
        </FlexEndColumn>
      )}
    </Navbar>
  );
};

export default Header;
