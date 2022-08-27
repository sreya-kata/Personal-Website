import logo from "../../assets/logo.png";
import {
  FooterSection,
  FullWidth,
  SocialMedias,
  SocialMedia,
} from "./Footer-Styles";
import { H4, P } from "../../constants/typography";
import "./Footer.css";

const socialMedias = [
  {
    icon: "<i class='fab fa-linkedin footer-icon'></i>",
    url: "https://www.linkedin.com/in/sreya-kata/",
  },
  {
    icon: "<i class='fas fa-envelope footer-icon'></i>",
    url: "mailto:sreya.kata@gmail.com",
  },
  {
    icon: "<i class='fab fa-facebook footer-icon'></i>",
    url: "https://www.facebook.com/sreya.katabathuni.33/",
  },
  {
    icon: "<i class='fab fa-github footer-icon'></i>",
    url: "https://github.com/sreya-kata",
  },
];

const Footer = () => {
  return (
    <FooterSection id="contact">
      <FullWidth>
        <a href="/#">
          <img src={logo} alt="initial in brown circle" />
        </a>
      </FullWidth>
      <FullWidth>
        <H4>Contact Me</H4>
      </FullWidth>
      <SocialMedias>
        {socialMedias.map((socialMedia) => {
          return (
            <SocialMedia href={socialMedia.url} target="_blank">
              <div dangerouslySetInnerHTML={{ __html: socialMedia.icon }}></div>
            </SocialMedia>
          );
        })}
      </SocialMedias>
      <FullWidth>
        <P>
          © {new Date().getFullYear()} Sreya Katabathuni | Some graphics belong
          to owners
        </P>
      </FullWidth>
    </FooterSection>
  );
};

export default Footer;
