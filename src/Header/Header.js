import logo from "../assets/logo.png";
import {
  Navbar,
  FlexColumn,
  NavLinks,
  NavItem,
  NavLink,
} from "./Header-Styles";

const Header = () => {
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
      <FlexColumn>
        <NavLinks class="navbar-nav">
          {Object.keys(navLinks).map((key, index) => {
            return (
              <NavItem key={index}>
                <NavLink href={navLinks[key]}>{key}</NavLink>
              </NavItem>
            );
          })}
        </NavLinks>
      </FlexColumn>
    </Navbar>
  );
};

export default Header;
