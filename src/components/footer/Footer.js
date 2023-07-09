import logo from "../../assets/logo.png";
import {
  FooterSection,
  FullWidth,
  SocialMedias,
  SocialMedia,
  Copyright,
} from "./Footer-Styles";
import { H3 } from "../../constants/typography";
import resume from "../../assets/Sreya.Kata.Resume.pdf";
import "./Footer.css";

const socialMedias = [
  {
    icon: "<i class='fas fa-envelope footer-icon'></i>",
    url: "mailto:sreya.kata@gmail.com",
  },
  {
    icon: "<i class='fab fa-linkedin footer-icon'></i>",
    url: "https://www.linkedin.com/in/sreya-kata/",
  },
  {
    icon: "<i class='fab fa-github footer-icon'></i>",
    url: "https://github.com/sreya-kata",
  },
  {
    icon: "<i class='fas fa-file footer-icon'></i>",
    url: resume,
  },
];

const Footer = () => {
  return (
    <FooterSection id="contact">
      <FullWidth>
        <a href="/#">
          <img src={logo} alt="initials in blue circle" />
        </a>
        <H3 white>
          <i>A person who never made a mistake never tried anything new</i>
        </H3>
        <SocialMedias>
          {socialMedias.map((socialMedia) => {
            return (
              <SocialMedia href={socialMedia.url} target="_blank">
                <div
                  dangerouslySetInnerHTML={{ __html: socialMedia.icon }}
                ></div>
              </SocialMedia>
            );
          })}
        </SocialMedias>
        <Copyright>
          <b>© {new Date().getFullYear()} Sreya Katabathuni</b>
        </Copyright>
        <H3 white>
          Designed in <b>Figma</b>, built in <b>React</b>, and deployed with{" "}
          <b>Netlify</b>
        </H3>
      </FullWidth>
    </FooterSection>
  );
};

export default Footer;
